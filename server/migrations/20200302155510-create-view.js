module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('t_view', {
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
      plan_id: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 't_plan',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      view_id: {
        type: Sequelize.UUID,
        references: {
          model: 't_view',
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
      pictureName: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      deviceFeature: {
        allowNull: false,
        type: Sequelize.JSON,
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

    await queryInterface.addIndex('t_view', ['house_id']);
    await queryInterface.addIndex('t_view', ['room_id']);
    await queryInterface.addIndex('t_view', ['plan_id']);
    await queryInterface.addIndex('t_view', ['view_id']);
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('t_view'),
};
