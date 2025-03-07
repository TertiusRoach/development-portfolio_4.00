//--|🠋 POST: Section.blocked.js (2025-03-07) 🠋|--//
server.post(`/${root}/blocked`, async (req, res) => {
  const { email } = req.body;

  const user = await database.collection('blocked').findOne({ email });
  try {
    if (!user) {
      return res.status(404).json({ view: 'register', data: null });
    } else {
      return res.status(200).json({
        view: 'blocked',
        data: user,
      });
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Login Errors 🠈|--//
  }
});
