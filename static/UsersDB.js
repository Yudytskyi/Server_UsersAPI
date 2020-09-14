const UserDB = new Map();
UserDB.set('test1@gmail.com', {
  firstName: 'Test1',
  lastName: 'Testovich1',
  email: 'test1@gmail.com',
  age: 31,
  gender: 'male',
  password: 'Test1Test',
})
  .set('test2@gmail.com', {
    firstName: 'Test2',
    lastName: 'Testovich2',
    email: 'test2@gmail.com',
    age: 32,
    gender: 'female',
    password: 'Test2Test',
  })
  .set('test3@gmail.com', {
    firstName: 'Test3',
    lastName: 'Testovich3',
    email: 'test3@gmail.com',
    age: 33,
    gender: 'other',
    password: 'Test3Test',
  });

module.exports = UserDB;
