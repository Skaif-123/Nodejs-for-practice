const mongoose = require("mongoose");
const User = require("../models/UserSchema");
const bcrypt=require("bcrypt");

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
      password:hashPassword,
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
    console.log("errror", error);
  }
};

// login controller
const loginUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: "Register unsuccesful",
    });
    console.log("errror", error);
  }
};

module.exports = { registerUser, loginUser };
