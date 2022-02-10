const { users, espresences } = require("../../models");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    npp: joi.number().required(),
    npp_supervisor: joi.number(),
    nama: joi.string().min(3).required().messages({
      "string.base": `Name must be text`,
      "string.empty": `Name field cannot be empty`,
      "string.min": `"Name" should have a minimum length of `,
      "any.required": `"Name" is required`,
    }),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send({
      status: "failed",
      message: error.details[0].message,
    });
  }

  //   check is user exist in databse
  const userExist = await users.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (userExist) {
    return res.status(400).send({
      status: "failed",
      message: "email is already registered, Please login!",
    });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const data = {
      nama: req.body.nama,
      email: req.body.email,
      password: hashedPassword,
      npp: req.body.npp,
      npp_supervisor: req.body.npp_supervisor,
    };

    const newUser = await users.create(data);

    const token = jwt.sign(
      {
        id: newUser.id,
      },
      process.env.TOKEN_KEY
    );

    res.status(200).send({
      status: "success",
      message: "Register success, Please login !",
      data: {
        user: {
          email: newUser.email,
          token: token,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

// login function
exports.login = async (req, res) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send({
      message: error.details[0].message,
    });
  }
  try {
    const { email, password } = req.body;

    const userExist = await users.findOne({
      where: {
        email: email,
      },
    });

    if (userExist === null) {
      return res.status(400).send({
        status: "failed",
        message: "Email or Password not match",
      });
    }

    const isValid = await bcrypt.compare(password, userExist.password);

    if (!isValid) {
      return res.status(400).send({
        status: "failed",
        message: "Email & Password not match",
      });
    }

    const data = {
      id: userExist.id,
    };

    const token = jwt.sign(data, process.env.TOKEN_KEY);

    res.status(200).send({
      status: "success",
      data: {
        user: {
          email: userExist.email,
          token,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};
