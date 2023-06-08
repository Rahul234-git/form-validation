const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const port = 4100;
const router = require('./Router/routes');
const cors = require('cors');


const app = express();
app.use(bodyparser.json());

app.use(cors());
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST");
    res.setHeader("Access-Control-Allow-Headers","Content-Type,Authorization");
    next();

});

app.use('/api',router);


mongoose.connect(
    "mongodb+srv://rahul:LRSxsk1iEQZWpmD6@cluster0.unujyrb.mongodb.net/?retryWrites=true&w=majority"
).then(result => {
    console.log("Connected");
    app.listen(port,() => {
        console.log(`Server is running on ${port}`);
    })

}).catch(error => {
    console.log(error);
});

