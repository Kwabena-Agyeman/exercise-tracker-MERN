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
router.get('/:id', async (req, res) => {
  try {
    let exercise = await Exercise.findById(req.params.id);

    res.json(exercise);
  } catch (error) {
    res.status(400).json(`Error : ${error.message}`);
  }
});

router.post('/add', async (req, res) => {
  try {
    let username = req.body.username;
    let description = req.body.description;
    let duration = Number(req.body.duration);
    let date = req.body.date;

    await new Exercise({ username, description, duration, date }).save();

    res.json('Exercise added');
  } catch (error) {
    res.status(400).json(`Error : ${error.message}`);
  }
});

router.delete('/remove/:id', async (req, res) => {
  try {
    await Exercise.findOneAndRemove({ _id: req.params.id });

    res.json('exercise deleted');
  } catch (error) {
    res.status(400).json(`Error : ${error.message}`);
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    let exercise = await Exercise.findByIdAndUpdate(req.params.id, {
      username: req.body.username,
      duration: req.body.duration,
      description: req.body.description,
      date: req.body.date,
    });

    res.json(exercise);
  } catch (error) {
    res.status(400).json(`Error : ${error.message}`);
  }
});

module.exports = router;
