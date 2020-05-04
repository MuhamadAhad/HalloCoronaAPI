"use strict";
module.exports = (sequelize, DataTypes) => {
  const Consultation = sequelize.define(
    "Consultation",
    {
      fullName: DataTypes.STRING,
      subject: DataTypes.STRING,
      liveConsul: DataTypes.DATEONLY,
      description: DataTypes.TEXT,
      phone: DataTypes.STRING,
      bornDate: DataTypes.STRING,
      age: DataTypes.STRING,
      gender: DataTypes.ENUM("male", "female"),
      status: DataTypes.ENUM("waiting", "approve", "cancel"),
      weight: DataTypes.STRING,
      height: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {}
  );
  Consultation.associate = function (models) {
    // associations can be defined here
    Consultation.belongsTo(models.User);
    Consultation.hasOne(models.Reply);
  };
  return Consultation;
};
