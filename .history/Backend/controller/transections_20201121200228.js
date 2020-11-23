//desc Get all transections
//@route Get /api/v1/transections
//access to Public

exports.getTransections = (req,res,next) =>{
    res.send('Get transections');
}
exports.addTransections = (req,res,next) =>{
    res.send('Post transections');
}
exports.deleteTransections = (req,res,next) =>{
    res.send('delete transections');
}