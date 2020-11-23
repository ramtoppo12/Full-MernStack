//desc Get all transections
//@route Get /api/v1/transections
//access to Public

const Transections = require('../models/transections');

exports.getTransections = await (req,res,next) =>{
    try {
        
    } catch (error) {
        
    }
}
exports.addTransections = (req,res,next) =>{
    res.send('Post transections');
}
exports.deleteTransections = (req,res,next) =>{
    res.send('delete transections');
}