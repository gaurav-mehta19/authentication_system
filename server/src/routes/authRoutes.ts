import express from 'express';
const router = express.Router();

const {test , SignupUser, SigninUser,UpdateUser} = require('../controllers/authControllers');

router.get('/',test)
router.post('/signup',SignupUser)
router.post('/signin',SigninUser)
router.put('/update',UpdateUser)

module.exports = router;