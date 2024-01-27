const express = require('express');
const db = require('./db');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [results] = await db.execute('SELECT * FROM employee_db WHERE employee_id = ? AND password = ?', [username, password]);

    if (results.length > 0) {
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error in login query:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;