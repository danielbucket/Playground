const express = require('express');
const router = express.Router();
const cors = require('cors');

const { loginUser, logoutUser } = require('./controllers/userController');

router.get('/', (req, res, next) => {
  res.send('React Auth Demo Routes');
  next();
});

router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;