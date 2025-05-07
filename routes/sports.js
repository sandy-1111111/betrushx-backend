const express = require('express');
const router = express.Router();

router.get('/live', (req, res) => {
  res.json([
    { id: 1, match: 'Team A vs Team B', odds: { a: 1.5, b: 2.1 } },
    { id: 2, match: 'Team C vs Team D', odds: { c: 1.8, d: 1.9 } }
  ]);
});

module.exports = router;