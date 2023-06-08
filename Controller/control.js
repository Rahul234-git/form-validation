const userDataHandel = require('../Model/model.js');
const countryDataHandel = require('../Model/CountryModel')

exports.getAllData = (req, res) => {
    dataHandel.find().then(result => {
        res.json({
            message: "Data fetched successfully!!",
            response: result
        })
    }).catch(error => {
        res.json({
            message: error
        })
    });

}

exports.saveData = (req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const country = req.body.country;
    const state = req.body.state;
    const city = req.body.city;
    const gender = req.body.gender;
    const dob = req.body.dob;
    const age = req.body.age;

    // if(firstName.match("^[a-zA-Z]*$") && lastName.match("^[a-zA-Z]*$") && email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
    // && gender && (gender === "Male" || gender === "Female" || gender === "Other" || country || state || city
    // || dob) &&
    // age >= 14) {
    const dataSave = new userDataHandel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        country: country,
        state: state,
        city: city,
        gender: gender,
        dob: dob,
        age: age
    })
    if(firstName.length ==0 || !firstName.match("^[a-zA-Z]*$")) {
        res.json({
            message:"invalid firstName!,Please fill valid firstName"
        })
    }
    else if(lastName.length == 0 || !lastName.match("^[a-zA-Z]*$")) {
        res.json({
            message:"invalid lastName!,Please fill valid lastName"
        })
    }
    else if(email.length == 0 || !email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
        res.json({
            message:"invalid email!,Please fill valid email"
        })
    }
    else if(!gender || (gender !== "Male" && gender !== "Female" && gender !== "Other")) {
        res.json({
            message:"invalid gender!,Please fill valid gender!"
        })
    }
    else if(country.length == 0) {
        res.json({
            message:"invalid country!,Please fill valid countryName!"
        })
    }
    else if(state.length == 0) {
        res.json({
            message:"invalid state!,Please fill valid stateName!"
        })
    }
    else if(city.length == 0) {
        res.json({
            message:"invalid city!,Please fill valid cityName!"
        })
    }
    else if(age < 14) {
        res.json({
            message:"invalid DOB!,Age must be 14 year old!"
        })

    }
    else {
        dataSave.save().then(result => {
            res.json({
                message: "Data save successfully!!!",
                response: result
            })
        }).catch(error => {
            console.log(error);
        });
    }
    // }
    // else {
    //     res.json({
    //         message:"Please fill up valid input "
    //     })
    // }
}

exports.getCountryName = (req, res) => {
    countryDataHandel.find().then(result => {
        res.json({
            message: "Data Fetched Successfully!!!",
            response: result
        })
    }).catch(error => {
        res.json({
            message: error
        })
    })

}

