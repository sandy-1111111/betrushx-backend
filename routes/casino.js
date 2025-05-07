const express = require('express');
const router = express.Router();

router.get('/games', (req, res) => {
  res.json([
    { id: 1, name: 'Roulette', provider: 'CasinoX' },
    { id: 2, name: 'Blackjack', provider: 'LiveDealer' }
  ]);
});

module.exports = router;
