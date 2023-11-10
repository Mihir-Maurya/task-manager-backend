const express = require('express');
const { loginUser, registerUser } = require('../controllers/userControllers');
const authMiddleware = require('../middleware/authMiddleware');
const taskRoute = require('./taskRoute')

const router = express.Router();


router.route('/login').post(loginUser)
router.route('/register').post(registerUser)
router.use('/api/tasks', authMiddleware, taskRoute);


module.exports = router