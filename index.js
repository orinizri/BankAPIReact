const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express();
const getData = require('./controllers/controller')
const bankRouter = require('./routes/routes')
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/", (req,res)=> {
    res.send("OK YAY")
}); //bankRouter

const port = process.env.PORT || 3000
app.listen(port, ()=> {
    console.log(`server is up ${port}`)
})