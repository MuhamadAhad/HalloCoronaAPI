"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      fullName: DataTypes.STRING,
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      asId: DataTypes.ENUM("0", "1"),
      gender: DataTypes.ENUM("male", "female"),
      phone: DataTypes.STRING,
      address: DataTypes.STRING(500),
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Consultation);
    User.hasMany(models.Article);
    User.hasMany(models.Reply);
  };
  return User;
};
