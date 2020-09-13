const { User } = require('./../models');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;
  try {
    const newUser = await User.createUser(body);
    res.status(201).send(newUser);
  } catch (e) {
    next(e);
  }
};

module.exports.updateUserById = async (req, res, next) => {
  const {
    params: { userId },
    body,
  } = req;
  const user = await User.findById(Number(userId));

  if (user) {
    const updatedUser = await User.updateById(Number(userId), body);
    return res.status(200).send(updatedUser);
  }
  res.status(404).send({ message: 'User not found' });
};

module.exports.getUserById = async (req, res, next) => {
  const {
    params: { userId },
  } = req;
  const user = await User.findById(Number(userId));

  if (user) {
    return res.status(200).send(user);
  }
  res.status(404).send({ message: 'User not found' });
};

module.exports.removeUserById = async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  const result = await User.removeById(Number(userId));
  if (result) {
    return res.status(204).send();
  }
  res.status(404).send('User not found');
};

module.exports.getAllUsers = async (req, res, next) => {
  const users = await User.findAll();
  res.send(users);
};
