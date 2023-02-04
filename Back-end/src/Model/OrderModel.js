const mongoose = require("mongoose")


const orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "USER",
        required: true
    },
  
    sub_total: {
        type: Number,
        required: true
    },
    phone_number: {
        type: Number,
        required:true
    },

}, { timestamps: true })

module.exports = mongoose.model("ORDER", orderSchema)