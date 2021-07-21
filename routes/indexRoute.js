const express = require('express')
const router = express.Router()

const indexController = require('../controller/indexController')

router.get('/', (req, res) => {
    res.send("home")
})

router.get('/sign-in', indexController.signInGet)
router.post('/sign-in', indexController.signInPost)

router.get('/sign-up', indexController.signUpGet)
router.post('/sign-up', indexController.signUpPost)

module.exports = router