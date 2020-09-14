const yup = require('yup');

const USER_CREATE_SCHEMA = yup
  .object()
  .shape({
    firstName: yup.string().trim().required(),
    lastName: yup.string().trim().required(),
    email: yup.string().email().required(),
    age: yup.number().integer().min(0).max(120).required(),
    gender: yup.string().oneOf(['male', 'female', 'other']).required(),
    password: yup.string().matches(/(?=.*?[a-z])(?=.*?\d)(?=.*?[A-Z])^.{8,40}$/, {
      message: 'password must be at least 8 characters long, be of mixed case and also contain a digit or symbol',
    }),
  })
  .noUnknown({ unknownKey: true });

const USER_UPDATE_SCHEMA = yup
  .object()
  .shape({
    firstName: yup.string().trim(),
    lastName: yup.string().trim(),
    age: yup.number().min(0).max(120),
    gender: yup.string().oneOf(['male', 'female', 'other']),
    password: yup.string().matches(/(?=.*?[a-z])(?=.*?\d)(?=.*?[A-Z])^.{8,40}$/, {
      message: 'password must be at least 8 characters long, be of mixed case and also contain a digit or symbol',
    }),
  })
  .noUnknown({ unknownKey: true });

module.exports.validateOnCreate = async ({ body }, res, next) => {
  try {
    body = await USER_CREATE_SCHEMA.validate(body);
    next();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};

module.exports.validateOnUpdate = async ({ body }, res, next) => {
  try {
    body = await USER_UPDATE_SCHEMA.validate(body);
    next();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};
