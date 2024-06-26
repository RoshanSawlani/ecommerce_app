import express from 'express'
import { forgotPasswordController, getAllOrdersController, getOrdersController, loginController, orderStatusController, registerController, testController, updateProfileController } from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authmiddleware.js'
import orderModel from '../models/orderModel.js'
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

// all orders
router.get('/all-orders',requireSignIn,isAdmin,getAllOrdersController)

// order status update
router.put('/order-status/:orderId',requireSignIn,isAdmin,orderStatusController)

export default router 