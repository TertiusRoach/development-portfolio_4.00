//--|🠋 POST: Form.verify.js (2025-03-07) 🠋|--//
server.post(`/${root}/verify`, async (req, res) => {
  const { email, passwordHash, activation } = req.body;
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));

  async function pending_enabled(email) {
    //--|🠋 Move User from 'pending' to 'enabled' 🠋|--//
    const pending = await database.collection('pending').findOne({ email });
    if (!pending) return; //--|🠈 Exit if the user doesn't exist in 'pending' 🠈|--//

    const enabled = await database.collection('enabled').findOne({ email }); //--|🠈 Check if the user already exists in 'enabled' 🠈|--//
    if (!enabled) {
      //--|🠋 Insert the document into 'enabled' collection 🠋|--//
      await database.collection('enabled').insertOne({
        _id: pending._id, //--|🠈 Preserve the same ObjectId 🠈|--//
        email: pending.email,
        passwordHash: pending.passwordHash,

        status: 'enabled',
        role: pending.role,
        firstName: pending.firstName,
        lastName: pending.lastName,

        userIP: pending.userIP,
        createdAt: pending.createdAt,
        updatedAt: await createDate('today'),
        lastLogin: null,

        passwordCode: null,
        passwordChangeRequests: 0,
        passwordCodeExpiresAt: null,
      });

      //--|🠋 Delete the user from the 'pending' collection 🠋|--//
      await database.collection('pending').deleteOne({ email });
    }
  }
  async function pending_blocked(email) {
    //--|🠋 Move User from 'pending' to 'blocked' 🠋|--//
    const pending = await database.collection('pending').findOne({ email });
    if (!pending) return; //--|🠈 Exit if the user doesn't exist in 'pending' 🠈|--//

    const blocked = await database.collection('blocked').findOne({ email }); //--|🠈 Check if the user already exists in 'blocked' 🠈|--//
    if (!blocked) {
      //--|🠋 Insert the document into 'blocked' collection 🠋|--//
      await database.collection('blocked').insertOne({
        _id: pending._id, //--|🠈 Preserve the same ObjectId 🠈|--//
        email: pending.email,
        passwordHash: pending.passwordHash,

        role: pending.role,
        status: 'blocked',
        firstName: pending.firstName,
        lastName: pending.lastName,

        userIP: pending.userIP,
        createdAt: pending.createdAt,
        updatedAt: await createDate('today'),
        lastLogin: null,

        restrictionExpiresAt: await createDate('tomorrow'),
      });

      //--|🠋 Delete the user from the 'pending' collection 🠋|--//
      await database.collection('pending').deleteOne({ email });
    }
  }

  try {
    let flagActivation = await matchValue(activation, user.activationCode);
    if (flagActivation) {
      await pending_enabled(email);
      return res.status(200).json({
        view: 'login',
        data: user,
      });
    } else if (user.activationAttempts < 3) {
      await database.collection('pending').updateOne(
        { email: email }, // Find the document by email
        { $inc: { activationAttempts: 1 } } // Increment activationAttempts by 1
      );
      let pendingDocument = await database.collection('pending').findOne({ email });
      return res.status(200).json({
        view: 'verify',
        data: pendingDocument,
      });
    } else {
      await pending_blocked(email);
      let blockedDocument = await database.collection('blocked').findOne({ email });
      return res.status(200).json({
        view: 'blocked',
        data: blockedDocument,
      });
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Login Errors 🠈|--//
  }
});
