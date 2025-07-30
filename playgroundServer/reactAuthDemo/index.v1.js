const express = require('express');
const router = express.Router();
const cors = require('cors');

const { login_user, logout_user, new_user } = require('./controllers/userController');

router.get('/', (req, res, next) => {
  res.send('React Auth Demo Routes');
  next();
});

router.post('/auth/login', login_user);
router.post('/auth/logout', logout_user);
router.post('/auth/new-user', new_user);

module.exports = router;