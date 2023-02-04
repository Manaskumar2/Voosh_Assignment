const mongoose = require("mongoose")

const isValid = (value) => {
    if (typeof value === "undefined" || typeof value === "null") return false;
    if (typeof value === "string" && value.trim().length == 0) return false;
    return true;
}
const isValidBody = (reqBody) => {
    if(Object.keys(reqBody).length == 0) {
        return false
    }
}
const isValidObjectId = (objectId) => {
    return mongoose.Types.ObjectId.isValid(objectId);
}
const isValidName = (name) => {
    return /^[a-zA-Z\. ]*$/.test(name)
}
const isValidPhone = (Mobile) => {
    return /^[6-9]\d{9}$/.test(Mobile)
}

const isValidPwd = (Password) => {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/.test(Password)
};

module.exports = {isValid, isValidBody, isValidPhone,isValidPwd, isValidObjectId, isValidName}