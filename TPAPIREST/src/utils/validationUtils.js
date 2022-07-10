const { jwtValidator } = require("jsonwebtoken")

const {validationResult,header} = require("express-validator")


const verifyValidation = module.exports.verifyValidation = (req,res,next) => {

    const errors = validationResult(req)

    if(errors.isEmpty())
        return next()


   res.status(400).json({
       code: 10,
       message: errors.array()
   })

}

