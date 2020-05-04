"use strict";
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define(
    "Reply",
    {
      response: DataTypes.TEXT,
      ConsultationId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
    },
    {}
  );
  Reply.associate = function (models) {
    // associations can be defined here
    Reply.belongsTo(models.User);
    Reply.belongsTo(models.Consultation);
  };
  return Reply;
};
