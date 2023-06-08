const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
    CountryName:{
        type:String,
        required:true,
    },
    StateName:{
        type:String,
        required:true
    },
    CityName:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model("countryDataHandel",CountrySchema,"country");