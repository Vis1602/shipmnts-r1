/*
const Sample = require('../models/Sample');

// @desc    Get all samples
// @route   GET /api/samples
// @access  Public
const getSamples = async (req, res) => {
  try {
    const samples = await Sample.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: samples.length,
      data: samples
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Get single sample
// @route   GET /api/samples/:id
// @access  Public
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

// @desc    Create new sample
// @route   POST /api/samples
// @access  Public
const createSample = async (req, res) => {
  try {
    const sample = await Sample.create(req.body);
    
    res.status(201).json({
      success: true,
      data: sample
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

// @desc    Update sample
// @route   PUT /api/samples/:id
// @access  Public
const updateSample = async (req, res) => {
  try {
    const sample = await Sample.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    
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

// @desc    Delete sample
// @route   DELETE /api/samples/:id
// @access  Public
const deleteSample = async (req, res) => {
  try {
    const sample = await Sample.findByIdAndDelete(req.params.id);
    
    if (!sample) {
      return res.status(404).json({
        success: false,
        message: 'Sample not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Sample deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

module.exports = {
  getSamples,
  getSample,
  createSample,
  updateSample,
  deleteSample
};
*/

const Store = require('../models/store.model.js');

const createStore = async (req, res) => {
  try {
    const {store_location, currency, tax_percentage, premium_items} = req.body;
    const exist = await Store.findOne({store_location});
    if(exist){
      res.status(400).json({
        success: false,
        message: 'Store with this location already exists'
      });
    }
    if(!store_location || !currency || !tax_percentage || !premium_items){
      res.status(400).json({
        success: false,
        message: 'Fields are missing'
      });
    }
    const store = await Store.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Store Created Successfully'
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

const updateStore = async (req, res) => {
  try {
    const store = await Store.findOneAndUpdate(
      {store_location : req.params.store_location},
      req.body
    );
    if (!store) {
      return res.status(404).json({
        success: false,
        message: 'Store not found'
      });
    }

    res.status(200).json({
      success: true,
      message: "Store Updated Successfully",

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

module.exports = {
  createStore, updateStore
};