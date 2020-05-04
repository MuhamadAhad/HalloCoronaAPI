"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Replies",
      [
        {
          response:
            "gejala ini juga bisa terjadi pada kondisi kesehatan lain yang menyebabkan tubuh lebih rentan mengalami perdarahan. Kondisi ini tentunya memerlukan pengobatan dari dokter",
          ConsultationId: 1,
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          response:
            "gejala ini juga bisa terjadi pada kondisi kesehatan lain yang menyebabkan tubuh lebih rentan mengalami perdarahan. Kondisi ini tentunya memerlukan pengobatan dari dokter",
          ConsultationId: 2,
          UserId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          response:
            "gejala ini juga bisa terjadi pada kondisi kesehatan lain yang menyebabkan tubuh lebih rentan mengalami perdarahan. Kondisi ini tentunya memerlukan pengobatan dari dokter",
          ConsultationId: 3,
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Replies", null, {});
  },
};
