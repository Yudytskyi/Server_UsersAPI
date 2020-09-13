const UserDB = new Map();
UserDB.set(1, {
  id: 1,
  firstName: 'Test1',
  lastName: 'Testovich1',
  email: 'test1@gmail.com',
  age: '31',
  gender: 'male',
})
  .set(2, {
    id: 2,
    firstName: 'Test2',
    lastName: 'Testovich2',
    email: 'test2@gmail.com',
    age: '32',
    gender: 'female',
  })
  .set(3, {
    id: 3,
    firstName: 'Test3',
    lastName: 'Testovich3',
    email: 'test3@gmail.com',
    age: '33',
    gender: 'other',
  });

module.exports = UserDB;
