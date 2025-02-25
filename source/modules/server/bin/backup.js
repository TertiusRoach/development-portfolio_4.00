// backup.js

server.post(`/${root}/register`, async (req, res) => {
  //--|🠋 Step 0: Request Inputs 🠋|--//
  const { firstName, lastName, email, passwordHash } = req.body;

  //--|🠋 Step 0: Find User 🠋|--//
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));

  //--|🠋 Step 0: Encrypt Data Fields 🠋|--//
  const encryptValue = async (value) => {
    //--|🠊 Encrypt String 🠈|--//
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(value, salt);
  };
  //--|🠋 Step 0: Decrypt Data Fields 🠋|--//
  const decryptValue = async (authPass, authEmail) => {
    const passHash = user.passwordHash;
    const passDecr = await bcrypt.compare(authPass, passHash);

    if (!passDecr) {
      return false;
    } else {
      if (passDecr === passHash && authEmail === user.email) {
        return true;
      }
    }
  };

  //--|🠋 Step 0: Action Functions 🠋|--//
  async function createField(firstName, lastName, email, passwordHash) {
    const activationCode = await createCode(4); // Ensure activationCode is defined

    await database.collection('pending').insertOne({
      email: email,
      passwordHash: await encryptValue(passwordHash),
      verifiedEmail: false,

      role: 'user',
      status: 'pending',
      firstName: firstName,
      lastName: lastName,

      activationCode: activationCode, // Use the defined activationCode
      activationAttempts: 0, // Maximum of 6 attempts before the user is blocked for 24 hours
      activationCodeExpiresAt: await createDate('tomorrow'),

      userIP: await trackPlace(req),
      createdAt: await createDate('today'),
      updatedAt: null,
      lastLogin: null,

      passwordCode: null,
      passwordCodeExpiresAt: null,
      passwordChangeRequests: 0, // Maximum of 6 before the user is blocked for 7 days
    });

    await sendEmail(email, activationCode, 'register'); // Pass the activationCode
    return activationCode;
  }
  async function sendEmail(email, activationCode, page) {
    let mailOptions;
    switch (page) {
      case 'register':
        mailOptions = {
          // Error sending activation email: Error: Mail command failed: 501 5.1.7 Bad sender address syntax
          from: `"Verify Email - Trinity Apps" <${process.env.DOMAIN_PASS}>`, // Replace with a desired sender name and email
          to: email, // Recipient's email
          subject: 'Activate your Account',
          text: `Your activation code is: ${activationCode}. It will expire in 24 hours.`,
          // Write a nice HTML email outline with inline CSS styling with a similar layout for the email as shown in die example screenshot.
          html: `<!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f9;
                }
                .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: #ffffff;
                  border: 1px solid #ddd;
                  border-radius: 8px;
                  overflow: hidden;
                }
                .header {
                  background: #2c3e50;
                  color: white;
                  text-align: center;
                  padding: 20px 10px;
                  font-size: 24px;
                }
                .content {
                  padding: 20px;
                  text-align: center;
                }
                .activation-code {
                  display: inline-block;
                  background: #2c3e50;
                  color: white;
                  font-size: 24px;
                  padding: 10px 20px;
                  margin-top: 10px;
                  border-radius: 8px;
                }
                .footer {
                  text-align: center;
                  padding: 10px;
                  font-size: 12px;
                  color: #777;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">Activate Your Account</div>
                <div class="content">
                  <p>Your activation code is:</p>
                  <div class="activation-code">${activationCode}</div>
                  <p>This code will expire in 24 hours.</p>
                </div>
                <div class="footer">
                  &copy; ${new Date().getFullYear()} Geitjie Techno. All rights reserved.
                </div>
              </div>
            </body>
          </html>
          `,
        };
        break;
      case 'password':
        mailOptions = {
          // Error sending activation email: Error: Mail command failed: 501 5.1.7 Bad sender address syntax
          from: `"Reset Password - Trinity Apps" <${process.env.DOMAIN_PASS}>`, // Replace with a desired sender name and email
          to: email, // Recipient's email
          subject: '',
          text: `Reset your Password with: ${activationCode}. It will expire in 24 hours.`,
          // Write a nice HTML email outline with inline CSS styling with a similar layout for the email as shown in die example screenshot.
          html: `<!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f9;
                }
                .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: #ffffff;
                  border: 1px solid #ddd;
                  border-radius: 8px;
                  overflow: hidden;
                }
                .header {
                  background: #2c3e50;
                  color: white;
                  text-align: center;
                  padding: 20px 10px;
                  font-size: 24px;
                }
                .content {
                  padding: 20px;
                  text-align: center;
                }
                .activation-code {
                  display: inline-block;
                  background: #2c3e50;
                  color: white;
                  font-size: 24px;
                  padding: 10px 20px;
                  margin-top: 10px;
                  border-radius: 8px;
                }
                .footer {
                  text-align: center;
                  padding: 10px;
                  font-size: 12px;
                  color: #777;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">Recover your Password</div>
                <div class="content">
                  <p>Your Reset Code is:</p>
                  <div class="activation-code">${activationCode}</div>
                  <p>This code will expire in 24 hours.</p>
                </div>
                <div class="footer">
                  &copy; ${new Date().getFullYear()} Your Company. All rights reserved.
                </div>
              </div>
            </body>
          </html>
          `,
        };
        break;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    transporter.verify((error, success) => {
      if (error) {
        console.error('SMTP Connection Error:', error);
      } else {
        console.log('SMTP Server is ready to send emails.');
      }
    });

    try {
      transporter.sendMail(mailOptions);
      console.log(`Activation email sent to ${email}`);
    } catch (error) {
      console.error('Error sending activation email:', error);
      throw error;
    }
  }

  //--|🠋 Step 5: Error Handling 🠋|--//
  try {
    //--|🠋 Step 6: Modularize Responses 🠋|--//
    if (!user) {
      await createField(firstName, lastName, email, passwordHash);
      return res.status(201).json({
        page: 'verify',
        status: 'pending',
        action: 'created',
        message: '//--|🠊 status(201): Accepted 🠈|--//',

        route: 'register',
      });
    } else {
      switch (user.status) {
        case 'pending':
          /*
          return res.status(201).json({
            page: 'verify',
            status: 'pending',
            action: 'created',
            message: '//--|🠊 status(201): Accepted 🠈|--//',
          });
          */
          break;
        case 'enabled':
          /*
          //--|🠋 Step 7: Check Password 🠋|--//
          let authorization = await decryptValue(passwordHash, user.password, user.email);
          if (authorization === false) {
            return res.status(201).json({
              page: 'password',
              status: 'incorrect',
              action: 'counter',
              message: '//--|🠊 status(201): Password 🠈|--//',
            });
          } else if (authorization === true) {
            return res.status(201).json({
              page: 'login',
              status: 'incorrect',
              action: 'login',
              message: '//--|🠊 status(201): Remembered 🠈|--//',
            });
          }
          */
          break;
        case 'blocked':
          break;
      }
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Register Errors 🠈|--//
  }
});

//--|🠋 POST: Form.verify.tsx 🠋|--//
server.post(`/${root}/verify`, async (req, res) => {
  //--|🠋 Step 1: Request Inputs 🠋|--//
  /* const { email, activation } = req.body; */
  const { email, password, code } = req.body;
  //--|🠋 Step 2: Find User 🠋|--//
  //--|🠋 Step 2: Find User 🠋|--//
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));

  //--|🠋 Step 4: Action Functions 🠋|--//
  async function updateField(email) {
    //--|🠋 Move User from 'pending' to 'enabled' 🠋|--//
    const user = await database.collection('pending').findOne({ email });

    if (user) {
      await database.collection('enabled').insertOne({
        email: user.email,
        passwordHash: user.passwordHash,
        verifiedEmail: true,

        role: user.role,
        status: 'enabled',
        firstName: user.firstName,
        lastName: user.lastName,

        userIP: user.userIP,
        createdAt: user.createdAt,
        updatedAt: new Date(),
        lastLogin: null,

        passwordCode: null,
        passwordCodeExpiresAt: null,
        passwordChangeRequests: 0,
      });

      await database.collection('pending').deleteOne({ email });

      console.log(`User ${email} has been verified and moved to 'enabled'.`);
      return true;
    }
    return false;
    /*
    await database.collection('enabled').insertOne({
      email: email,
      passwordHash: await userPending.passwordHash,
      verifiedEmail: true,

      role: 'user',
      status: 'enabled',
      firstName: await userPending.firstName,
      lastName: await userPending.lastName,

      userIP: await trackPlace(req),
      createdAt: await userPending.createdAt,
      updatedAt: await createDate('today'),
      lastLogin: null,

      passwordCode: null,
      passwordCodeExpiresAt: null,
      passwordChangeRequests: 0,
    });

    return 'enabled';
    */
  }
  async function deleteField(email, state) {
    await database.collection(state).deleteOne({ email });
  }

  //--|🠋 Step 5: Error Handling 🠋|--//
  try {
    if (user.activationCode === code) {
      await updateField(email);
      await deleteField(email, 'pending');
      switch (user.status) {
        case 'pending':
          return res.status(201).json({
            page: 'login',
            status: 'verified',
            action: 'subscribed',
            message: '//--|🠊 status(200): OK 🠈|--//',
          });
        case 'enabled':
          break;
        case 'blocked':
          break;
      }
    } else {
      return res.status(201).json({
        page: 'verify',
        status: 'incorrect',
        action: 'counter',
        message: '//--|🠊 status(401): Mismatch 🠈|--//',
      });
    }

    /*
    if (user.activationCode === activation) {      
      const verified = await updateField(user.email);
      switch (verified) {
        case true:
          // Delete the field matching the email inside 'pending' if the User activation matches the Data activationCode inside 'pending' collection.
          await updateField(email);
          await deleteField(email, 'pending');
          return res.status(200).json({
            page: 'login',
            status: 'verified',
            action: 'success',
            message: '//--|🠊 status(200): Activated 🠈|--//',
          });
          break;
        case false:
          return res.status(404).json({
            page: 'verify',
            status: 'incorrect',
            action: 'mismatch',
            message: '//--|🠊 status(404): User Not Found 🠈|--//',
          });
          break;
      }
    }
    */
  } catch (error) {
    axiosError(error); //--|🠈 Handle Login Errors 🠈|--//
  }
});

//--|🠋 POST: Form.login.tsx 🠋|--//
server.post(`/${root}/login`, async (req, res) => {
  //--|🠋 Step 1: Declare Request Inputs 🠋|--//
  const { email, password } = req.body;

  //--|🠋 Step 2: Find User 🠋|--//
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));

  //--|🠋 Step 5: Error Handling 🠋|--//
  try {
    //--|🠋 Step 3: Check if User Exists 🠋|--//
    if (!user) {
      return res.status(201).json({
        page: 'register',
        status: 'missing',
        action: 'register',
        message: '//--|🠊 status(404): Not Found 🠈|--//',
      });
    }

    //--|🠋 Step 4: Handle User Status 🠋|--//
    switch (user.status) {
      case 'pending':
        return res.status(201).json({
          page: 'verify',
          status: 'unverified',
          action: 'confirmation',
          message: '//--|🠊 status(400): Account Not Verified 🠈|--//',
        });
      case 'enabled':
        return res.status(201).json({
          page: 'password',
          status: 'incorrect',
          action: 'reset',
          message: '//--|🠊 status(400): Account Not Verified 🠈|--//',
        });
      case 'blocked':
        return res.status(403).json({
          page: 'blocked',
          status: 'denied',
          action: 'contact-support',
          message: '//--|🠊 status(403): Forbidden 🠈|--//',
        });

      case 'enabled':
        //--|🠋 Step 5: Validate Password 🠋|--//
        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

        if (!isPasswordValid) {
          return res.status(201).json({
            page: 'password',
            status: 'incorrect',
            action: 'retry',
            message: '//--|🠊 status(401): Unauthorized 🠈|--//',
          });
        }

        return res.status(200).json({
          page: 'application',
          status: 'authorized',
          action: 'dashboard',
          message: '//--|🠊 status(200): OK 🠈|--//',
        });
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Register Errors 🠈|--//
  }
});

//--|🠋 POST: Form.password.tsx 🠋|--//
server.post(`/${root}/password`, async (req, res) => {
  /*
  //--|🠋 Step 1: Declare User Inputs 🠋|--//
  const { email } = req.body;

  //--|🠋 Step 2: Find Email Inside Database 🠋|--//
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));
  */
  /*
  if (user === null) {
    //--|🠊 12. register: Form.login + Form.password 🠈|--//
    //--|🠊 status(404): Not Found 🠈|--//
    return res.status(404).json({
      status: 'missing',
      action: 'register',
    });
  }
  */
  /*
  const { email } = req.body;
  let today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  let randomCode = randomizeCodeActivation(4);
  */
  /*
  try {
    // Check collections in priority order
    const pendingUser = await database.collection('pending').findOne({ email });
    if (pendingUser) {
      return res.status(200).json({ status: 'pending', message: "Your account hasn't been verified yet." });
    }

    const enabledUser = await database.collection('enabled').findOne({ email });

    // if (!enabledUser) {
    //   return res.status(404).json({ status: 'missing', message: 'Account not found. Please register.' });
    // }


    // If passwordCode has never been set or has expired
    if (!enabledUser.passwordCodeExpiresAt || Date.now() > new Date(enabledUser.passwordCodeExpiresAt).getTime()) {
      await database.collection('enabled').updateOne(
        { _id: enabledUser._id },
        {
          $set: {
            passwordCode: randomCode,
            passwordCodeExpiresAt: tomorrow.toISOString(),
          },
        }
      );

      try {
        // await sendActivationEmail(email, randomCode, 'password');
        return res.status(200).json({ status: 'created', message: 'Password reset code sent to your email.' });
      } catch (emailError) {
        console.error(`Failed to send password reset email:`, emailError);
        return res.status(500).json({ status: 'email_error', message: 'Error sending email. Contact support.' });
      }
    }

    return res.status(200).json({ status: 'waiting', message: 'Password reset already requested. Check your email.' });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ status: 'error', message: 'Internal server error.' });
  }
  */
});

//--|🠋 POST: Form.reset.tsx 🠋|--//
server.post(`/${root}/reset`, async (req, res) => {
  /*
  let today = new Date();
  let todayISO = today.toISOString().split('.')[0] + 'Z'; // ISO format

  try {
    const { email, passwordCode, newHash } = req.body;

    if (!email || !passwordCode || !newHash) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const user = await database.collection('enabled').findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate the reset code
    if (passwordCode !== user.passwordCode) {
      return res.status(400).json({ message: 'Invalid reset code' });
    }

    // Check if the reset code has expired
    if (new Date() > new Date(user.passwordCodeExpiresAt)) {
      const newResetCode = randomizeCodeActivation(10);
      const newExpirationTime = new Date();
      newExpirationTime.setHours(newExpirationTime.getHours() + 1); // Reset code valid for 1 hour

      await database.collection('enabled').updateOne(
        { _id: user._id },
        {
          $set: {
            passwordCode: newResetCode,
            passwordCodeExpiresAt: newExpirationTime.toISOString(),
          },
        }
      );

      // await sendActivationEmail(user.email, newResetCode, 'reset'); //
      return res.status(400).json({ message: 'Reset code expired. A new code has been sent to your email.' });
    }

    // Check if the new password is the same as the old one
    const isPasswordSame = await bcrypt.compare(newHash, user.passwordHash);
    if (isPasswordSame) {
      await database
        .collection('enabled')
        .updateOne({ _id: user._id }, { $set: { passwordCode: null, passwordCodeExpiresAt: null } });
      return res.status(200).json({ status: 'remembered', message: 'You remembered your password!' });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(newHash, salt);

    // Update user with new password and remove reset code
    await database.collection('enabled').updateOne(
      { _id: user._id },
      {
        $set: {
          passwordHash: hashedPassword,
          passwordCode: null,
          passwordCodeExpiresAt: null,
          updatedAt: todayISO,
        },
      }
    );

    res.status(200).json({ status: 'authorized', message: 'Password reset successful' });
  } catch (error) {
    console.error('Password Reset Error:', error);
    res.status(500).json({ status: 'error', message: 'An error occurred during password reset', error: error.message });
  }
  */
});
