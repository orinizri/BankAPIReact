const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express();
const getData = require('./controllers/controller')
const bankRouter = require('./routes/routes')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/users", bankRouter);


app.listen(3000, ()=> {
    console.log('server is up')
})