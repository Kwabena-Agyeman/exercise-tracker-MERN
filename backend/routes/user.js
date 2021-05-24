const express = require('express');
const router = express.Router();
const User = require('../models/username');

router.get('/', async (req, res) => {
  try {
    let users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(400).json(`Error : ${error.message}`);
  }
});

router.post('/add', async (req, res) => {
  try {
    let username = req.body.username;

    await new User({ username }).save();

    res.json('User added');
  } catch (error) {
    res.status(400).json(`Error : ${error.message}`);
  }
});

module.exports = router;
