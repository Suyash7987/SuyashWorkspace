const express =require('express');
const authController =require('./../Controllers/authController')
const router =express.Router(); 

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
router.route('/logout').get(authController.logout);
router.route('/forgotPassword').post(authController.forgotPassword);
router.route('/resetPassword/:token').patch(authController.resetPassword);




// router.route('/').get(authController.showusers)
module.exports =router