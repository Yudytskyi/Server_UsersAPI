const express = require('express');
const { UserController } = require('./../controllers');
const { ValidateUser } = require('../middlewares');

const UserRouter = express.Router();

UserRouter.post('/newUser', ValidateUser.validateOnCreate, UserController.createUser);
UserRouter.get('/users', UserController.getAllUsers);

UserRouter.route('/users/:userId')
  .get(UserController.getUserById)
  .put(ValidateUser.validateOnUpdate, UserController.updateUserById)
  .delete(UserController.removeUserById);

module.exports = UserRouter;
