const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { signup, signin } = require('./controllers/auth');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

router.post('/signup', signup);
router.get('/', requireAuth, (req, res) => {
  res.send({ hi: 'there' });
});

router.post('/signin', requireSignIn, signin)

module.exports = router;
