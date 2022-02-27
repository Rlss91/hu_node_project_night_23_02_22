const express = require("express");
const usersValidation = require("../../validation/users");
const usersModel = require("../../model/users");
const bcrypt = require("../../config/bcrypt");

const router = express.Router();

//http://localhost:3000/api/auth/signup
router.post("/signup", async (req, res) => {
  try {
    const validatedValue = await usersValidation.signupSchema.validateAsync(
      req.body
    );
    const userData = await usersModel.selectUserByEmail(validatedValue.email);
    console.log("auth/singup/userData", userData);
    if (userData.length === 0) {
      const hashPassword = await bcrypt.createHash(validatedValue.password);
      await usersModel.insertUser(
        validatedValue.email,
        hashPassword,
        validatedValue.name
      );
      res.json("user inserted");
    } else {
      throw "user already exists";
    }
  } catch (err) {
    console.log("err from signup", err);
    res.status(401).json({ err });
  }
});

module.exports = router;
