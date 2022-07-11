const{body,isString,notEmpty,withMessage} = require("express-validator");
const { verifyValidation } = require("../utils/validationUtils");

module.exports.loginValidator = [
    body("username")
    .isString()
    .notEmpty().withMessage("Elcampo es obligatorio"),

    body("email")
    .isEmail().withMessage("El campo username es obligatorioy tiene que ser un mail")
    .notEmpty().withMessage("Elcampo es obligatorio"),

    body("password")
    .isAlphanumeric().isLength({min:2}).withMessage("El campo password debe ser alfanumeric con al menos2 caracteres")
    .notEmpty().withMessage("Elcampo es obligatorio"),

    verifyValidation
];

module.exports.singupValidator = [];
