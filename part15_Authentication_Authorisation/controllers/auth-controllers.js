const mongoose = require("mongoose");
const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register controller
const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    // check if existing user is there or not
    const checkExistingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    /**
     *  !Checking if there is any existing user over there.....
     */

    if (checkExistingUser) {
      res.status(404).json({
        success: false,
        message:
          "User already there with same email Id or password found in database",
      });
    }

    /**
     *  TODO :hashing password using bcrypt function
     *
     */

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    /**
     *  TODO : creating a new User document inside collection users
     */
    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
      role: role || "user",
    });

    /**
     * TODO : Checking if new userr is ceated or not
     */

    if (newUser) {
      res.status(201).json({
        success: true,
        data: newUser,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to register user! please try again.",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Register unsuccesful",
    });
    console.log("error", error);
  }
};

// login controller
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const loginUserInfo = await User.findOne({ username });

    /**
     *  TODO: checking if the user exists or not
     */
    if (!loginUserInfo) {
      res.json({
        success: false,
        message: "username not valid, user does not exist",
      });
    }
    // Now user is existing, now we check the password for our user

    const matchedPassword = bcrypt.compareSync(
      password,
      loginUserInfo.password
    );
    if (!matchedPassword) {
      res.json({
        success: false,
        message: `Invalid credentials for  ${username}`,
      });
    }

    /**
     *  TODO: STORING DATA IN TOKEN
     */

    const accessToken = jwt.sign(
      {
        userId: loginUserInfo._id,
        username: loginUserInfo.username,
        role: loginUserInfo.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30m",
      }
    );

    res.json({
      success: true,
      message: "login successful",
      accessToken,
    });
  } catch (error) {
    res.status(500).json({
      message: "Register un succesful",
    });
    console.log("error", error);
  }
};

module.exports = { registerUser, loginUser };
