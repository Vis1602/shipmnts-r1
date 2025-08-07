const Plan = require('../models/plan.model.js');
const Store = require('../models/store.model.js')
const createPlan = async (req, res) => {
  try {
    const {store_location, valid_from, valid_to, items} = req.body;
    const exist = await Store.findOne({store_location});
    if(!exist){
      res.status(400).json({
        success: false,
        message: 'Store with this location doesn\'t exists'
      });
    }
    if(!store_location || !valid_from || !valid_to || !Array.isArray(items)){
      res.status(400).json({
        success: false,
        message: 'Fields are missing or invalid'
      });
    }
    const plan = await Plan.create({...req.body, store_location: exist._id});

    res.status(201).json({
        
            plan_id: plan._id,
            store_location: store_location,
            success: 'true',
            message: "Plan Created Successfully"
          
          
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: messages
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};
const getSample = async (req, res) => {
  try {
    const sample = await Sample.findById(req.params.id);
    
    if (!sample) {
      return res.status(404).json({
        success: false,
        message: 'Sample not found'
      });
    }

    res.status(200).json({
      success: true,
      data: sample
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};


const getPlan = async (req, res) => {
    try {
      const plan = await Plan.findById(req.params.plan_id);
    
      if (!plan) {
        return res.status(404).json({
          success: false,
          message: 'Sample not found'
        });
      }
      res.status(200).json({
        plan_id: plan.plan_id,
        store_location: plan.store_location,
        valid_from:plan.valid_from,
        valid_to:plan.valid_to,
        items: plan.items
        
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Server Error',
        error: error.message
      });
    }
  };
module.exports= {createPlan, getPlan};