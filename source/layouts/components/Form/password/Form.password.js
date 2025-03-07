//--|🠋 POST: Form.password.tsx 🠋|--//
server.post(`/${root}/password`, async (req, res) => {
  const { email, passwordHash } = req.body;
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));

  async function updateRenewal(email) {
    const passwordCode = await createCode(4);
    await database.collection('enabled').updateOne(
      { email: email },
      {
        $set: {
          userIP: await trackPlace(req),
          updatedAt: await createDate('today'),

          passwordCode: passwordCode,
          passwordCodeExpiresAt: await createDate('tomorrow'),
        },
        $inc: { passwordChangeRequests: 1 },
      }
    );
    await sendEmail(email, passwordCode, 'password');
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

      restrictionExpiresAt: document.restrictionExpiresAt,
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

  async function blocked_pending(email) {
    //--|🠋 Move User from 'blocked' to 'pending' 🠋|--//
    const blocked = await database.collection('blocked').findOne({ email });
    if (!blocked) return; //--|🠈 Exit if the user doesn't exist in 'blocked' 🠈|--//

    const pending = await database.collection('pending').findOne({ email }); //--|🠈 Check the correct collection 🠈|--//
    const activationCode = await createCode(4); //--|🠈 Generate activation code once 🠈|--//
    if (!pending) {
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
  async function enabled_blocked(email) {
    //--|🠋 Move User from 'enabled' to 'blocked' 🠋|--//
    const enabled = await database.collection('enabled').findOne({ email });
    if (!enabled) return; //--|🠈 Exit if the user doesn't exist in 'enabled' 🠈|--//

    const blocked = await database.collection('blocked').findOne({ email }); //--|🠈 Check if the user already exists in 'blocked' 🠈|--//
    if (!blocked) {
      //--|🠋 Insert the document into 'blocked' collection 🠋|--//
      await database.collection('blocked').insertOne({
        _id: enabled._id, //--|🠈 Preserve the same ObjectId 🠈|--//
        email: enabled.email,
        passwordHash: enabled.passwordHash,

        role: enabled.role,
        status: 'blocked',
        firstName: enabled.firstName,
        lastName: enabled.lastName,

        userIP: enabled.userIP,
        createdAt: enabled.createdAt,
        updatedAt: await createDate('today'),
        lastLogin: null,

        restrictionExpiresAt: await createDate('tomorrow'),
      });

      //--|🠋 Delete the user from the 'enabled' collection 🠋|--//
      await database.collection('enabled').deleteOne({ email });
    }
  }

  try {
    if (!user) {
      return res.status(200).json({ view: 'register', data: null });
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
          if (user.passwordChangeRequests === 3) {
            await enabled_blocked(email);
            let blockedDocument = await database.collection('blocked').findOne({ email });
            return res.status(200).json({
              view: 'blocked',
              data: blockedDocument,
            });
          } else {
            let flagRenewal = await verifyDate(user.passwordCodeExpiresAt);
            switch (flagRenewal) {
              case 'expired':
                await updateRenewal(email);
                return res.status(200).json({ view: 'reset', data: user });
              default:
                return res.status(200).json({ view: 'reset', data: user });
            }
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
              view: 'login',
              data: user,
            });
          }
      }
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Login Errors 🠈|--//
  }
});
