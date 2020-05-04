"use strict";
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "Article",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      attach: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {}
  );
  Article.associate = function (models) {
    // associations can be defined here
    Article.belongsTo(models.User);
  };
  return Article;
};
