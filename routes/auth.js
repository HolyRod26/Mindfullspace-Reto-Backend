const express = require("express"),
  router = express.Router(),
  sequelize = require("../db"),
  jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const { body } = req;
  const user = await sequelize.model.users.findOne({
    where: {
      email: body.email,
    },
  });
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }
  if (!user.validPassword(body.password)) {
    return res.status(401).json({ message: "invalid credentials" });
  }
  const token = jwt.sign({ user: user.id }, process.env.JWT_SECRETKEY, {
    expiresIn: process.env.JWT_SECRETIN,
  });

  return res.json({
    message: "Authenticated succesfully",
    token,
  });
});


router.post('/signup', async (req, res) => {
    const { body } = req;
    const user = await sequelize.model.users.findOne({
        where: {
            email: body.email,

        }
    })
    if (user) {
        return res.status(401).json({message: 'User already registered'})
    }
    user = await sequelize.models.create({
        // Model of user
    })
    return res.json({
        message: 'Authenticated succesfully',
        token,
    })
})

module.exports = router;
