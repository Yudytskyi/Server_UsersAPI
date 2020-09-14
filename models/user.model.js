const _ = require('lodash');
const UsersDB = require('../static/UsersDB');

const User = {
  createUser: async values => {
    try {
      const id = await values.email;
      const newUser = { ...values };
      UsersDB.set(id, newUser);
      delete newUser.password;
      return Promise.resolve(newUser);
    } catch (e) {
      throw new Error(e);
    }
  },

  updateById: async (id, updateBody) => {
    try {
      const user = UsersDB.get(id);
      const updatedUser = _.assign(user, updateBody);
      delete updatedUser.password;
      UsersDB.set(id, updatedUser);
      return Promise.resolve(UsersDB.get(id));
    } catch (e) {
      throw new Error(e);
    }
  },

  findById: async id => {
    try {
      const user = UsersDB.get(id);
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
