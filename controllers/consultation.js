const { Consultation, User, Reply } = require("../models");

exports.index = async (req, res) => {
  try {
    if (req.user.asId === "0") {
      const result = await Consultation.findAll({
        order: [["createdAt", "ASC"]],
        attributes: { exclude: ["UserId"] },
      });
      if (result) {
        res.status(200).send({ data: result });
      } else {
        res.status(200).send({ message: "data not found" });
      }
    } else if (req.user.asId === "1") {
      const result = await Consultation.findAll({
        where: {
          UserId: req.user.id,
        },
        order: [["updatedAt", "DESC"]],
        include: [
          {
            model: Reply,
            attributes: {
              exclude: [
                "ConsultationId",
                "UserId",
                "createdAt",
                "updatedAt",
                "id",
              ],
            },
            include: [
              {
                model: User,
                attributes: ["fullName"],
              },
            ],
          },
        ],
        attributes: ["subject", "description", "createdAt", "updatedAt"],
      });
      if (result) {
        res.status(200).send({ data: result });
      } else {
        res.status(200).send({ message: "data not found" });
      }
    } else {
      res.status(200).send();
    }
  } catch (error) {
    console.log(error);
    res.status(200).send({ message: "internal server error" });
  }
};

exports.show = async (req, res) => {
  try {
    const result = await Consultation.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Reply,
          attributes: {
            exclude: ["ConsultationId", "UserId"],
          },
          include: [
            {
              model: User,
              attributes: ["id", "fullName", "asId"],
            },
          ],
        },
      ],
      attributes: { exclude: ["updatedAt", "UserId"] },
    });
    if (result) {
      res.status(200).send({ data: result });
    } else {
    }
  } catch (error) {
    console.log(error);
    res.status(200).send({ message: "internal server error" });
  }
};

exports.create = async (req, res) => {
  try {
    if (req.user.asId === "1") {
      const consul = await Consultation.create({
        ...req.body,
        UserId: req.user.id,
        status: "waiting",
      });
      if (consul) {
        const result = await Consultation.findOne({
          where: {
            id: consul.id,
          },
          include: [
            {
              model: User,
              attributes: ["id", "userName", "fullName"],
            },
          ],
          attributes: { exclude: ["createdAt", "updatedAt", "UserId"] },
        });
        res.status(200).send({ data: result });
      } else {
        res.status(200).send({ message: "data failed to create" });
      }
    } else {
      res.status(200).send({ message: "you are not patient" });
    }
  } catch (error) {
    console.log(error);
    res.status(200).send({ message: "internal server error" });
  }
};

exports.update = async (req, res) => {
  try {
    const found = await Consultation.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (found) {
      if (req.user.asId === "0") {
        const consul = await Consultation.update(
          {
            status: req.body.status,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        );
        if (consul > 0) {
          const result = await Reply.create({
            UserId: req.user.id,
            response: req.body.response,
            ConsultationId: req.params.id,
          });
          if (result) {
            const results = await Consultation.findOne({
              where: {
                id: req.params.id,
              },
              include: [
                {
                  model: Reply,
                  attributes: {
                    exclude: ["ConsultationId", "UserId"],
                  },
                  include: [
                    {
                      model: User,
                      attributes: ["id", "fullName", "asId"],
                    },
                  ],
                },
              ],
            });
            res.send({ data: results });
          } else {
            res.status(200).send({ message: "data failed to create" });
          }
        } else {
          res.status(200).send({ message: "data failed to update" });
        }
      } else {
        res.status(200).send({ message: "you are not doctor" });
      }
    } else {
      res.status(200).send({ message: "data not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(200).send({ message: "internal server error" });
  }
};
