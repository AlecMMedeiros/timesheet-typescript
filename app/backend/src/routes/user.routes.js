const express = require('express');
const { userController } = require('../controllers');
const { reqBodyMiddleware, userMiddleware } = require('../middlewares');

const router = express.Router();


router.get('/:id',
  userController.listUsersById);

router.get('/',
  userController.listUsers);

router.post('/',
  reqBodyMiddleware.userBody,
  userMiddleware.validateNewUSer,
  userController.registerUser);



module.exports = router;