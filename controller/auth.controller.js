const { authModel } = require("../model/auth.model");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

async function authsignupController(name, email, password) {
  //   const hash = await argon2.hash(password);
  console.log("data");
  //   try {
  //     const user = await authModel.create({ name, email, password: hash });
  //     console.log(user);
  //     return {
  //       status: 201,
  //       payload: {
  //         msg: "User signup successfully",
  //       },
  //     };
  //   } catch (error) {
  //     return {
  //       status: 403,
  //       payload: {
  //         msg: error.message,
  //       },
  //     };
  //   }
}

module.export = { authsignupController };
