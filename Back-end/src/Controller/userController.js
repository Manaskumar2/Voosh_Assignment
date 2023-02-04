const userModel = require("../Model/userModel")
const validation = require('../Validation/validation')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')





const createUser = async (req, res) => {

    try {
        let data = req.body;

        let { name, phone, password } = data

        if (validation.isValidBody(data)) return res.status(400).send({ status: false, message: "provide all required fields" })

        if (!validation.isValid(name)) return res.status(400).send({ status: false, message: `Username is Required` });
        if (!validation.isValidName(name)) return res.status(400).send({ status: false, message: "please enter a valid name" })
        data.name = name.toLowerCase()

        if (!validation.isValidPwd(password)) return res.status(400).send({ status: false, message: "Password should be 8-15 characters long and must contain one of 0-9,A-Z,a-z and special characters", })

        if (!validation.isValidPhone(phone)) return res.status(400).send({ status: false, message: "This phone number is invalid" })
        let uniquePhone = await userModel.findOne({ phone: phone })
        if (uniquePhone) return res.status(400).send({ status: false, message: `This phoneNumber has already registered provide new phoneNo `, })

        const hashedPassword = await bcrypt.hash(password, 10)
        data.password = hashedPassword

        const createUser = await userModel.create(data)
        return res.status(201).send({ status: true, message: "success", data: createUser })

    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}


const login = async (req, res) => {
    try {
        let data = req.body
        let { phone, password } = data

        if (validation.isValidBody(data)) return res.status(400).send({ status: false, msg: "provide all  details to login" })

        if (!validation.isValidPhone(phone)) return res.status(400).send({ status: false, message: "phone number is required" })
        

        if (!validation.isValid(password)) return res.status(400).send({ status: false, message: "Pasworrd is required" })

        let findUser = await userModel.findOne({ phone: phone })
        if (!findUser) return res.status(400).send({ status: false, message: "phone number is wrong" })

        let bcryptPass = await bcrypt.compare(password, findUser.password)
        if (!bcryptPass) return res.status(400).send({ status: false, message: "Password incorrect" })

        let token = jwt.sign({ userId: findUser._id },"Voosh Food resturant", { expiresIn: '1d' });
        
        res.status(200).send({ status: true, message: "User login successfully",data: { token }})


    } catch (error) {
        res.status(500).send({ status: false, error: error.message })
    }
}
module.exports = {createUser,login}