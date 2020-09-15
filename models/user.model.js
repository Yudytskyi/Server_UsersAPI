const _ = require('lodash');
const UsersDB = require('../static/UsersDB');

const User = {
  createUser: async values => {
    try {
      const id = await values.email;
      const newUser = await { ...values };
      UsersDB.set(id, newUser);
      delete newUser.password;
      return Promise.resolve(newUser);
    } catch (e) {
      throw new Error(e);
    }
  },

  updateById: async (id, updateBody) => {
    try {
      const user = await UsersDB.get(id);
      const updatedUser = await _.assign(user, updateBody);
      UsersDB.set(id, updatedUser);
      delete updatedUser.password;
      return Promise.resolve(updatedUser);
    } catch (e) {
      throw new Error(e);
    }
  },

  findById: async id => {
    try {
      const user = await UsersDB.get(id);
      delete user.password;
      return Promise.resolve(user);
    } catch (e) {
      throw new Error(e);
    }
  },

  findAll: async () => {
    try {
      const users = _.forIn([...UsersDB.values()], user => delete user.password);
      return Promise.resolve(users);
    } catch (e) {
      throw new Error(e);
    }
  },

  removeById: async id => {
    try {
      return Promise.resolve(UsersDB.delete(id), 'Ok');
    } catch (e) {
      throw new Error(e);
    }
  },
};

module.exports = User;
