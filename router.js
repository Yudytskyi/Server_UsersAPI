const express = require('express');
const userRouter = require('./routes/user.route');
const router = express.Router();

module.exports = router.use(userRouter);
