const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const _ = require('lodash');

const Phone = require('../models/Phone');

const checkIDParam = (req,res,next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }
  next();
};


/* List all elements from #{model} */
router.get('/', (req, res, next) => {
  Phone.find()
    .then(list => res.json(list))
    .catch(e => res.json(e));
});


/* Create a new #{model} */
router.post('/', (req, res, next) => {

  const obj_data = _.pick(req.body,['brand','name','specs','image']);
  const obj = new Phone(obj_data);

  obj.save()
    .then(o => res.json(o))
    .catch(e => res.json(e));
});

/* GET a single Phone. */
router.get('/:id', checkIDParam, (req, res) => {
  Phone.findById(req.params.id)
    .then(o => res.json(o))
    .catch(e => res.json(e));
});

/* EDIT a Phone. */
router.put('/:id', checkIDParam, (req, res) => {
  const updates = _.pick(req.body,['brand','name','specs','image']);
  Phone.findByIdAndUpdate(req.params.id,{new:true})
    .then(o => res.json(o))
    .catch(e => res.json(e));
});

/* DELETE a Phone. */
router.delete('/phones/:id', checkIDParam, (req, res) => {

  Phone.remove({ _id: req.params.id })
      .then(o => res.json({message: 'Phone has been removed!'}))
      .catch(e => res.json(e));
});


module.exports = router;
