const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');

router.get('/', async (req, res) => {
  try {
    let exercises = await Exercise.find();

    res.json(exercises);
  } catch (error) {
    res.status(400).json(`Error : ${error.message}`);
  }
});

router.post('/add', async (req, res) => {
  try {
    let username = req.body.username;
    let description = req.body.description;
    let duration = Number(req.body.duration);
    let date = Date.parse(req.body.date);

    await new Exercise({ username, description, duration, date }).save();

    res.json('Exercise added');
  } catch (error) {
    res.status(400).json(`Error : ${error.message}`);
  }
});

module.exports = router;
