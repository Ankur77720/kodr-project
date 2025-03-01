const express = require('express')
const router = express.Router()
const userMiddleware = require("../middlewares/user.middleware")
const userController = require("../controllers/user.controller")


router.post('/register', userMiddleware.registerValidation, userController.register)

router.post('/login', userMiddleware.loginValidation, userController.login)

/* /v1/api/users/feed [get] {protected} */
router.get('/feed', userMiddleware.authUser,userController.feedController)


module.exports = router