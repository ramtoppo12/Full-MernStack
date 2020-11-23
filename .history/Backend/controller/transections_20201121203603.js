//desc Get all transections
//@route Get /api/v1/transections
//access to Public

const Transections = require('../models/transections');

exports.getTransections = async (req,res,next) =>{
    try {
        const transections = await Transections.find();

        return res.status(200).json({
            sucess:true,
            count:transections.length,
            data:transections
        })
    } catch (error) {
        return res.status(200).json({
            sucess:false,
            error:'Server error'
        })
    }
}
exports.addTransections = async (req,res,next) =>{
    res.send('Post transections');
}
exports.deleteTransections = async (req,res,next) =>{
    res.send('delete transections');
}