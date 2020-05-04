const bcrypt = require("bcrypt");
const { User } = require("../models");
const jwt = require("jsonwebtoken");

exports.update = async (req, res) => {
  try {
    const saltRounds = 10;
    bcrypt.compare(
      req.body.password,
      req.user.password,
      async (error, result) => {
        if (result) {
          bcrypt.hash(req.body.newPassword, saltRounds, async (error, hash) => {
            if (!error) {
              const result = await User.update(
                {
                  password: hash,
                },
                {
                  where: {
                    id: req.user.id,
                  },
                }
              );
              res.status(200).send({ msg: "success" });
            } else {
              res.status(200).send({ msg: "encrypt failure" });
            }
          });
        } else {
          res.status(200).send({ msg: "wrong password" });
          console.log(error);
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal server error" });
  }
};

exports.show = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });
    if (user.userName && user.id === req.user.id) {
      res.status(200).send({ data: user });
    } else {
      res.status(200).send({ msg: "data not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal server error" });
  }
};
