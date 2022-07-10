const jwt = require("jsonwebtoken")
const config = require("config")
const { token } = require("morgan")
const decoded = jwt.decode(token)

module.exports.createToken =(body)=>{
    return new Promise((resolve,reject)=>{
        jwt.sign(body, config.get("authentication.jwtSecret"),
        {expiresIn: config.get("authentication.jwtExpiry")},
        (error, token) => {
            
            if(error) return reject(error);

            resolve(token)

        })
    })
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
       }).join(''));
    
         return JSON.parse(jsonPayload);
    };
