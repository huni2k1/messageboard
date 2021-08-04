var express = require('express');
var router = express.Router();
const moment = require('moment');
const messages = [
  {
    title: "Greeting",
    description: "Hi there!",
    username: "Amando",
    date: moment().startOf('date').fromNow()
  },
  {
    title: "Say hi",
    description: "Hello World",
    username: "Jake",
    date: moment().startOf('hour').fromNow()
  }
];
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mesage Board', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form');
});
router.post('/new', function (req, res, next) {
  let newMessage = {
    title: req.body.title,
    description: req.body.description,
    username: req.body.username,
    date: moment()
      .startOf('hour' - 1)
      .fromNow(),
  }
  messages.push(newMessage)
  res.redirect("/");
});
module.exports = router;