
const express = require('express');
const {
    createPlan, getPlan
} = require('../controllers/planController.js');

const router = express.Router();

router.route('/').post(createPlan);
router.route('/:plan_id')
  .get(getPlan);
module.exports=router;