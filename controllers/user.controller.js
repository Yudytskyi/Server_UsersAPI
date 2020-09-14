const _ = require('lodash');
const { User } = require('./../models');

module.exports.createUser = async ({ body }, res, next) => {
  try {
    res.status(201).send(await User.createUser(body));
  } catch (e) {
    next(e);
  }
};

module.exports.updateUserById = async ({ params: { userId }, body: updateBody }, res, next) => {
  try {
    (await User.findById(userId))
      ? res.status(200).send(await User.updateById(userId, updateBody))
      : res.status(404).send({ message: `User with email ${userId} not found` });
  } catch (e) {
    next(e);
  }
};

module.exports.getUserById = async ({ params: { userId } }, res, next) => {
  try {
    const user = await User.findById(userId);
    user ? res.status(200).send(user) : res.status(404).send({ message: `User with email ${userId} not found` });
  } catch (e) {
    next(e);
  }
};

module.exports.removeUserById = async ({ params: { userId } }, res, next) => {
  try {
    (await User.removeById(userId))
      ? res.status(204).send(`User with email ${userId} deleted`)
      : res.status(404).send(`User with email ${userId} not found`);
  } catch (e) {
    next(e);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    _.isEmpty(users) ? res.status(404).send('Sorry, no users') : res.status(200).send(users);
  } catch (e) {
    next(e);
  }
};
