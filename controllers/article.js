const { Article, User } = require("../models");
const { Op } = require("sequelize");
const sequelize = require("sequelize");

const defArticle = {
  include: [
    {
      model: User,
      attributes: ["id", "fullName", "asId"],
    },
  ],
  attributes: {
    exclude: ["updatedAt", "UserId"],
  },
};

exports.index = async (req, res) => {
  try {
    let condition = {};
    for (let key in req.query) {
      switch (key) {
        case "createdAt":
          condition.createdAt = {
            [Op.startsWith]: req.query.createdAt,
          };
          break;
      }
    }
    const result = await Article.findAll({
      where: {
        ...condition,
      },
      attributes: ["title", "description", "attach", "id"],
    });
    if (result) {
      res.status(200).send({ data: result });
    } else {
      res.status(200).send({ msg: "data not found" });
    }
  } catch (error) {
    console.log(error);
    res.send({ msg: "internal server error" });
  }
};

exports.show = async (req, res) => {
  try {
    const result = await Article.findOne({
      where: {
        id: req.params.id,
      },
      ...defArticle,
    });
    if (result) {
      res.status(200).send({ data: result });
    } else {
      res.status(200).send({ msg: "data not found" });
    }
  } catch (error) {
    console.log(error);
    res.send({ msg: "internal server error" });
  }
};

exports.create = async (req, res) => {
  try {
    if (req.user.asId === "0") {
      const result = await Article.create({ ...req.body, UserId: req.user.id });
      if (result) {
        const article = await Article.findOne({
          where: {
            id: result.id,
          },
          ...defArticle,
        });
        res.status(200).send({ data: article, message: "success" });
      } else {
        res.status(200).send({ message: "data not found" });
      }
    }
    {
      res.status(200).send({ message: "you are not doctor" });
    }
  } catch (error) {
    console.log(error);
    res.send({ msg: "internal server error" });
  }
};
