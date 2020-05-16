"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Consultations",
      [
        {
          fullName: "Najla",
          subject: "Pusssiiiiinnnng bangeettt",
          liveConsul: "2020-06-07",
          description: "saya sayangat pusing sekali dan mual-mual",
          phone: "08983493763",
          bornDate: "1997-05-01",
          age: "25",
          height: "165",
          gender: "female",
          status: "waiting",
          weight: "56",
          UserId: "5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Maulana",
          subject: "Mumetttt",
          liveConsul: "2020-06-07",
          description:
            "saya sayangat pusing sekali dan mual-mual, kurang tidur",
          phone: "08983493763",
          bornDate: "1997-05-01",
          age: "25",
          height: "165",
          gender: "female",
          status: "waiting",
          weight: "56",
          UserId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Khabib",
          subject: "Pusssiiiiinnnng",
          liveConsul: "2020-06-07",
          description:
            "saya sayangat pusing sekali dan mual-mual, kurang makan",
          phone: "08983493763",
          bornDate: "1997-05-01",
          age: "25",
          height: "165",
          gender: "female",
          status: "waiting",
          weight: "56",
          UserId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Irza",
          subject: "Pusssiiiiinnnng",
          liveConsul: "2020-06-07",
          description: "saya sayangat pusing sekali dan mual-mual",
          phone: "08983493763",
          bornDate: "1997-05-01",
          age: "25",
          height: "165",
          gender: "female",
          status: "waiting",
          weight: "56",
          UserId: "6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Nafila",
          subject: "Pusssiiiiinnnng syekaaaliiii",
          liveConsul: "2020-06-07",
          description: "saya sayangat pusing sekali dan mual-mual",
          phone: "08983493763",
          bornDate: "1997-05-01",
          age: "25",
          height: "165",
          gender: "female",
          status: "waiting",
          weight: "56",
          UserId: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Consultations", null, {});
  },
};
