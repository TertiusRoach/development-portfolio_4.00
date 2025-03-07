//--|🠋 POST: Form.login.tsx 🠋|--//
server.post(`/${root}/login`, async (req, res) => {
  const { email, passwordHash } = req.body;
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));
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

  try {
    if (!user) {
      return res.status(200).json({ view: 'register', data: null });
    } else {
      let flagPassword = await decryptValue(passwordHash, user.passwordHash);
      switch (user.status) {
        case 'pending':
          if (flagPassword === true) {
            let flagActivation = await verifyDate(user.activationCodeExpiresAt);
            switch (flagActivation) {
              case 'expired':
                await updateActivation(email);
                break;
            }
            return res.status(200).json({ view: 'verify', data: user });
          }
        case 'enabled':
          if (flagPassword) {
            await database
              .collection('enabled')
              .updateOne(
                { email: email },
                { $set: { userIP: await trackPlace(req), lastLogin: await createDate('today') } }
              );
            return res.status(200).json({ view: 'launch', data: user });
          } else {
            return res.status(200).json({ view: 'password', data: user });
          }
        case 'blocked':
          let flagDate = await verifyDate(user.restrictionExpiresAt);
          if (flagDate === 'blocked') {
            return res.status(200).json({
              view: 'blocked',
              data: user,
            });
          } else {
            await blocked_pending(email);
            switch (flagPassword) {
              case true:
                return res.status(200).json({
                  view: 'verify',
                  data: user,
                });
              case false:
                return res.status(200).json({
                  view: 'password',
                  data: user,
                });
            }
          }
      }
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Register Errors 🠈|--//
  }
});
