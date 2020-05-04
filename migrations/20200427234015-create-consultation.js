"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Consultations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      subject: {
        type: Sequelize.STRING,
      },
      liveConsul: {
        type: Sequelize.DATEONLY,
      },
      description: {
        type: Sequelize.TEXT,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      bornDate: {
        type: Sequelize.DATEONLY,
      },
      age: {
        type: Sequelize.STRING,
      },
      height: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.ENUM("male", "female"),
      },
      status: {
        notNull: false,
        type: Sequelize.ENUM("waiting", "approve", "cancel"),
        defaultValue: "waiting",
      },
      weight: {
        type: Sequelize.STRING,
      },
      UserId: {
        allowedNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Consultations");
  },
};
