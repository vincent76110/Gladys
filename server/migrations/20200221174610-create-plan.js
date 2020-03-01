module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('t_plan', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      house_id: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 't_house',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      room_id: {
        type: Sequelize.UUID,
        references: {
          model: 't_room',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      selector: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      picture: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addIndex('t_plan', ['house_id']);
    await queryInterface.addIndex('t_plan', ['room_id']);
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('t_plan'),
};
