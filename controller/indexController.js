let bcrypt = require('bcryptjs')

let user = require('../models/user')


exports.signUpGet = (req, res) => {
    res.render('sign-up')
}

exports.signUpPost = async (req, res) => {
    let name = req.body.name
    let password = req.body.password

    //checks if user already exists
    let tempUser = await user.find({ name: name })
    if (tempUser.length > 0) {
        res.send(`User Already Exists ${name}`)
        return
    }

    bcrypt.hash(password, 10)
        .then((hashedPass) => {
            let newUser = new user({
                name: name,
                password: hashedPass,
                date: Date.now
            })


            newUser.save((err) => {
                if (err) {
                    console.log(err);
                    res.send('err')
                } else {
                    res.redirect('/sign-up')
                }
            })
        })

}


exports.signInGet = (req, res) => {
    res.render('sign-in')
}


exports.signInPost = async (req, res) => {
    let name = req.body.name
    let pass = req.body.password
    console.log(name, pass);

    let currUser = await user.findOne({ name: name })
    console.log(currUser);
    if (!currUser) {
        res.send('User dosent exist')
        return
    }



    bcrypt.compare(pass, currUser.password, (err, equal) => {
        if (equal) {
            res.send('logged in')
        } else {
            res.send('wrong password')
        }
    })

    // res.redirect('/sign-in')
}