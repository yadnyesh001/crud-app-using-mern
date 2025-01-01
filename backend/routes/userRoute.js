const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/userModel');

const router = express.Router();

router.post('/', async (req, res) => {
  const {name, email, age} = req.body;
  try {
    const userAdded = await User.create({name, email, age});
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({error: error.message});
  }
});

router.get('/', async (req, res) => {
  const users = await User.find();
  try {
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message});
  }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const users = await User.findById({_id: id});
  try {
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message});
  }
});

router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const users = await User.findByIdAndDelete({_id: id});
  try {
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message});
  }
});

router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const {name, email, age} = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message});
  }
});


module.exports = router;