'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('products', [
      {
        name: 'LED.B - беспроводная светодиодная полимеризационная лампа | Woodpecker',
        price: 4600,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tosi TX-164 - турбинный наконечник с генератором света, для 4-х канального соединения | Tosi Foshan',
        price: 7100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'AirPex - портативный апекслокатор с беспроводной зарядкой | Eighteeth',
        price: 25000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'LM-Arte Complete Set - набор инструментов для реставрационных работ | LM-Instruments Oy',
        price: 49870,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Product', null, {});
  }
};
