//desc Get all transections
//@route Get /api/v1/transections
//access to Public

exports.getTransection = (req,res,next) =>{
    res.stayus(200).send('Get transections');
}