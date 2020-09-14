const express = require('express');
const { UserRouter } = require('./routes');
const router = express.Router();

module.exports = router.use(UserRouter);
