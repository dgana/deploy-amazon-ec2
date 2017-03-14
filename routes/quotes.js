var express = require('express');
var router = express.Router();
const Quotes = require('../models/quotes')
const seedQuotes = require('../seeder/quotes')
const mongoose = require('mongoose')

router.get('/', (req, res) => {
  Quotes.find((err, quotes) => {
    if (err) throw err;
    res.json(quotes)
  });
});

router.post('/seed', (req, res) => {
  Quotes.remove(err => {
      if (err) res.status(500).send(err)
      else console.log('Dropped collection: quotes')
    })
  Quotes.create(seedQuotes, (err, quotes) => {
    if (err) res.status(500).send(err)
    else res.send(quotes)
  })
});


module.exports = router;
