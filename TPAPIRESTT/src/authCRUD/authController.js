const { createToken } = require("../utils/tokenUtils")


module.exports.validateLogin = (req,res,next) =>{

    

    if (req.body.username == "admin" && req.doy.password == "1234") {
        
        req.currentUserData = {
            userId : 1234,
            permissions: ["verUsuarios,borrarUsuarios"],
            firstName: "Matias"
        }
    
        next()
    } else{

            res.status(401).jason({
                message :"Ocurrio un error"
            })
    }
 
}

module.exports = createSessionToken=(req, res,next) =>{

    createToken(req.currentUserData, "7d" )
    .then(token => {
    
    req.userToken = token
    next()

    })
    .catch(error =>{
        //
        console.log(error)

        res.status(500).jason({
            code:5,
            message:"Ocurrio un error"
        })
    })

}

module.exports.sendLoginResponse = (req,res,next) =>{

    const token = req.userToken;

    const options ={
        maxAge: 3600 * 1000
    }

    res.cookie("token", token,{...options, httpOnly: true})
    res.cookie("isLogged", true,options)

    res.status(200).json({
        code: 10,
        message:token
    })

}
