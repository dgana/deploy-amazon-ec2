var express = require('express');
var router = express.Router();
const Quotes = require('../models/quotes')

router.get('/', (req, res) => {
  Quotes.find((err, quotes) => {
    if (err) throw err;
    res.json(quotes)
  });
});

router.post('/', (req, res) => {
  var newQuote = Quotes({
    quote: req.body.quote
  });
  newQuote.save((err, quote) => {
    if (err) throw err;
    res.json(quote)
  });
});

module.exports = router;
