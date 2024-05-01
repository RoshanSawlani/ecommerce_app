import express from 'express'
import { forgotPasswordController, getOrdersController, loginController, registerController, testController, updateProfileController } from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authmiddleware.js'
// router object
const router = express.Router()

// routing
// REGISTER || METHOD POST
router.post('/register', registerController)

// LOGIN || METHOD POST
router.post('/login', loginController)

// Forgot password
router.post('/forgot-password', forgotPasswordController)

// test routes
router.get('/test', requireSignIn, isAdmin, testController)

// protected User Route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})

// protected Admin Route auth
router.get('/admin-auth',requireSignIn,isAdmin, (req,res)=>{
    res.status(200).send({ok:true})
})

// update profile
router.put('/profile',requireSignIn, updateProfileController)

// orders
router.get('/orders',requireSignIn,getOrdersController)

export default router 