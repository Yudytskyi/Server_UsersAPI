const UserDB = require('../static/UserDB');

const User = {
  createUser(values) {
    const id = UserDB.size + 1;
    const newUser = { id, ...values };
    return Promise.resolve(UserDB.set(id, newUser).get(id));
  },

  updateById(id, body) {
    UserDB.set(id, { ...UserDB.get(id), ...body });
    return Promise.resolve(UserDB.get(id));
  },

  findById(id) {
    return Promise.resolve(UserDB.get(id));
  },

  findAll() {
    return Promise.resolve([...UserDB.values()]);
  },

  removeById(id) {
    return Promise.resolve(UserDB.delete(id));
  },
};

module.exports = User;
