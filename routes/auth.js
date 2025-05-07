const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  // Dummy login
  const { username, password } = req.body;
  if (username === 'admin' && password === '123') {
    return res.json({ success: true, token: 'fake-jwt-token' });
  }
  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

module.exports = router;
