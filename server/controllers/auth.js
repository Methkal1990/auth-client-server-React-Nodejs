const jwt = require('jwt-simple');
const config = require('../config');
const User = require('../models/user');

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};

exports.signup = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(422).send({ error: 'Email is in use' });
  }

  user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  await user.save();

  res.send({ token: tokenForUser(user) });
};

exports.signin = (req, res) => {
  res.send({ token: tokenForUser(req.user) });
};
