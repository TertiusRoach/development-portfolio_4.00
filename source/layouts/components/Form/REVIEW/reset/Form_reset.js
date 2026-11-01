//--|🠋 POST: Form.reset.js (2025-03-07) 🠋|--//
server.post(`/${root}/reset`, async (req, res) => {
  const { email, passwordNew, renewal } = req.body;
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));

  async function updatePassword(email, password) {
    await database.collection('enabled').updateOne(
      { email: email },
      {
        $set: {
          passwordHash: await encryptValue(password),

          userIP: await trackPlace(req),
          updatedAt: await createDate('today'),

          passwordCode: null,
          passwordChangeRequests: 0,
          passwordCodeExpiresAt: null,
        },
      }
    );
  }

  try {
    let flagRenewal = await matchValue(renewal, user.passwordCode);
    let flagPassword = await decryptValue(passwordNew, user.passwordHash);
    if (flagRenewal) {
      await updatePassword(email, passwordNew);
      return res.status(200).json({
        view: 'login',
        data: user,
      });
    } else {
      return res.status(200).json({
        view: 'reset',
        data: user,
      });
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Login Errors 🠈|--//
  }
});
