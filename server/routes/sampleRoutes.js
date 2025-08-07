const express = require('express');
const {
  getSamples,
  getSample,
  createSample,
  updateSample,
  deleteSample
} = require('../controllers/sampleController');

const router = express.Router();

router.route('/')
  .get(getSamples)
  .post(createSample);

router.route('/:id')
  .get(getSample)
  .put(updateSample)
  .delete(deleteSample);

module.exports = router;
