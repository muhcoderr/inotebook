const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator"); //data validation using express validator
var bcrypt = require("bcryptjs"); //To Hash Password
var jwt = require('jsonwebtoken'); //json web token when user is login in return token

//Create Scret Key
const JWT_SECRET = 'Muhammad$isagoodb$oy';

// Create a User using: POST "/api/auth/createuser". No login required

router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 4 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }

      //To Create hash a password:
      const salt = await bcrypt.genSaltSync(10);
      const hashPassword = await bcrypt.hashSync(req.body.password, salt);

      // create a new users
      user = await User.create({
        name: req.body.name,
        password: hashPassword,
        email: req.body.email,
      });

      //Json Web Token for Users
      const data = {
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      // res.json(user)
      res.json({authtoken})

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occured");
    }
  }
);

module.exports = router;
