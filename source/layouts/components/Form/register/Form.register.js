//--|🠋 POST: Form.register.tsx 🠋|--//
server.post(`/${root}/register`, async (req, res) => {
  const { firstName, lastName, email, passwordHash } = req.body;
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));
  //--|🠋 CRUD 🠋|--//
  async function createEntry(firstName, lastName, email, passwordHash) {
    const activationCode = await createCode(4); // Ensure activationCode is defined
    await database.collection('pending').insertOne({
      email: email,
      passwordHash: await encryptValue(passwordHash),

      role: 'user',
      status: 'pending',
      firstName: firstName,
      lastName: lastName,

      activationCode: activationCode,
      activationAttempts: 0,
      activationCodeExpiresAt: await createDate('tomorrow'),

      lastLogin: null,
      userIP: await trackPlace(req),
      updatedAt: null,
      createdAt: await createDate('today'),

      /*
          passwordCode: null,
          passwordCodeExpiresAt: null,
          passwordChangeRequests: 0,
        */
    });

    await sendEmail(email, activationCode, 'register');
  }
  async function readEntry(email) {
    const document =
      (await database.collection('enabled').findOne({ email })) ||
      (await database.collection('pending').findOne({ email })) ||
      (await database.collection('blocked').findOne({ email }));
    return {
      email: document.email,

      role: document.role,
      status: document.status,
      firstName: document.firstName,
      lastName: document.lastName,

      activationCode: document.activationCode,
      activationAttempts: document.activationAttempts,
      activationCodeExpiresAt: document.activationCodeExpiresAt,

      userIP: document.userIP,
      createdAt: document.createdAt,
      updatedAt: document.updatedAt,
      lastLogin: document.lastLogin,

      passwordCode: document.passwordCode,
      passwordCodeExpiresAt: document.passwordCodeExpiresAt,
      passwordChangeRequests: document.passwordChangeRequests,
    };
  }
  async function updateActivation(email) {
    let activationCode = await createCode(4); // Ensure activationCode is defined
    await database.collection('pending').updateOne(
      { email: email }, // Find the document by email
      {
        $set: {
          updatedAt: await createDate('today'),

          activationCode: activationCode,
          activationCodeExpiresAt: await createDate('tomorrow'),
        },
      }
    );
    await sendEmail(email, activationCode, 'register');
  }

  //--|🠋 Move Document between Collections 🠋|--//
  async function blocked_pending(email) {
    //--|🠋 Move User from 'blocked' to 'pending' 🠋|--//
    const blocked = await database.collection('blocked').findOne({ email });
    if (!blocked) return; //--|🠈 Exit if the user doesn't exist in 'blocked' 🠈|--//

    const pending = await database.collection('pending').findOne({ email }); //--|🠈 Check the correct collection 🠈|--//
    if (!pending) {
      const activationCode = await createCode(4); //--|🠈 Generate activation code once 🠈|--//

      //--|🠋 Insert the document into 'pending' collection 🠋|--//
      await database.collection('pending').insertOne({
        _id: blocked._id, //--|🠈 Preserve the same ObjectId 🠈|--//
        email: blocked.email,
        passwordHash: blocked.passwordHash,

        role: blocked.role,
        status: 'pending',
        firstName: blocked.firstName,
        lastName: blocked.lastName,

        activationCode,
        activationAttempts: 0,
        activationCodeExpiresAt: await createDate('tomorrow'),

        userIP: blocked.userIP,
        createdAt: blocked.createdAt,
        updatedAt: await createDate('today'),
        lastLogin: null,
      });

      //--|🠋 Delete the user from the 'blocked' collection 🠋|--//
      await database.collection('blocked').deleteOne({ email });

      await sendEmail(email, activationCode, 'register');
    }
  }

  try {
    if (!user) {
      await createEntry(firstName, lastName, email, passwordHash);
      return res.status(200).json({
        view: 'verify',
        data: await readEntry(email),
      });
    } else {
      switch (user.status) {
        case 'pending':
          let flagActivation = await verifyDate(user.activationCodeExpiresAt);
          if (flagActivation === 'expired') {
            await updateActivation(email);
          }
          return res.status(200).json({
            view: 'verify',
            data: user,
          });
        case 'enabled':
          let flagPassword = await decryptValue(passwordHash, user.passwordHash);
          if (flagPassword) {
            return res.status(200).json({
              view: 'login',
              data: user,
            });
          } else {
            return res.status(200).json({
              view: 'password',
              data: user,
            });
          }
        case 'blocked':
          let flagRestriction = await verifyDate(user.restrictionExpiresAt);
          if (flagRestriction === 'blocked') {
            return res.status(200).json({
              view: 'blocked',
              data: user,
            });
          } else {
            await blocked_pending(email);
            return res.status(200).json({
              view: 'verify',
              data: user,
            });
          }
      }
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Register Errors 🠈|--//
  }
});
