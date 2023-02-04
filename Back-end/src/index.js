
const express = require('express');
const route = require('./routes/route');
const mongoose = require('mongoose');
const app = express();
const multer = require("multer")
const cors = require("cors")

app.use(cors())
app.use(express.json());

app.use(multer().any());


mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://manaskumar:iFVJhjYrsH7iars8@cluster0.s4pqkzd.mongodb.net/foodOrder?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then(() => console.log("MongoDb is connected"))
.catch(err => console.log(err))


app.use('/', route)


app.listen(process.env.PORT|| 4000,function(){
    console.log("Port running on "+(process.env.PORT||4000));
})