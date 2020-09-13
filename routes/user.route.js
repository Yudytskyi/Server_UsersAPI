const express = require('express');
const userController = require('./../controllers/user.controller');

const userRouter = express.Router();

userRouter.post('/newUser', userController.createUser);
userRouter.get('/users', userController.getAllUsers);

userRouter
  .route('/users/:userId')
  .get(userController.getUserById)
  .put(userController.updateUserById)
  .delete(userController.removeUserById);

module.exports = userRouter;
