const orderModel = require('../Model/OrderModel')
const userModel = require('../Model/userModel')
const validation = require('../Validation/validation')


const createOrder = async (req, res) => {
    try {
        const data = req.body
        const user_id = req.decodedToken.userId
    

        const { sub_total, phone_number } = data
           data.user_id =user_id

        



        if (validation.isValidBody(data)) return res.status(400).send({ status: false, msg: "provide all  details to login" })

        if (!validation.isValidPhone(phone_number)) return res.status(400).send({ status: false, message: "phone number is required" })


        if (!validation.isValidObjectId(user_id)) return res.status(400).send({ status: false, message: "invalid user_id" })
         
         let userCheck = await userModel.findOne({ _id: user_id })
        if (!userCheck) return res.status(404).send({ status: false, message: "user id doesn't exist" })
        
    
        if(!validation.isValid(sub_total)) return res.status(400).send({ status: false, message: "sub_total required" })

        if(!typeof sub_total==Number) return res.status(400).send({status:false,message:"Enter amount in number"})

        const order = await orderModel.create(data)

        return res.status(200).send({status:true,message:"order create suscessfully",data:order})
        
    } catch (error) {
        res.status(500).send({ status: false, error: error.message })

    }


}
    const getOrderById = async (req,res)=>{
        try {
            const user_id= req.query.user_id


            if (!user_id) { return res.status(400).send({ status: false, message: "please give user Id" }) }
    if (req.decodedToken.userId != user_id) return res.status(403).send({ status: false, message: "you are unauthorized" })

    if(!validation.isValidObjectId(user_id)){return res.status(400).send({status:false,message:"invalid user id"})}



        const findId = await orderModel.find({ user_id:user_id})
        if (!findId) { return res.status(404).send({ status: false, message: "No Order Created By this user" }) }
        else{
            return res.status(200).send({status:true , message:"successful get Order details",data:findId})
        }

            
        } catch (error) {
            res.status(500).send({ status: false, error: error.message })
            
        }
    }

    module.exports ={createOrder,getOrderById}