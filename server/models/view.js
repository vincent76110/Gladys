
const { addSelector } = require('../utils/addSelector');

const MAX_SIZE_VIEW_PICTURE = 5000 * 1024; // 80 ko à revoir

module.exports = (sequelize, DataTypes) => {
  console.log('Debut view');
  const view = sequelize.define(
    't_view',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      house_id: {
        type: DataTypes.UUID,
        references: {
          model: 't_house',
          key: 'id',
        },
      },
      room_id: {
        type: DataTypes.UUID,
        references: {
          model: 't_room',
          key: 'id',
        },
      },
      plan_id: {
        type: DataTypes.UUID,
        references: {
          model: 't_plan',
          key: 'id',
        },
      },
      view_id: {
        type: DataTypes.UUID,
        references: {
          model: 't_view',
          key: 'id',
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      selector: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: {
          is: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        },
      },
      picture: {
        allowNull: true,
        type: DataTypes.TEXT,
        validate: {
          customValidator(value) {
            if (value && value.length) {
              const base64ImageLength = Buffer.byteLength(value.substring(value.indexOf(',') + 1), 'base64');
              if (base64ImageLength > MAX_SIZE_VIEW_PICTURE) {
                throw new Error('Plan picture too big');
              }
            }
          },
        },
      },
      pictureName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      deviceFeature: {
        allowNull: false,
        type: DataTypes.JSON,
      },
    },
    {},
  );
  // add slug if needed
  view.beforeValidate(addSelector);

  view.associate = (models) => {
    view.belongsTo(models.House, {
      foreignKey: 'house_id',
      targetKey: 'id',
      as: 'house',
    });
    view.belongsTo(models.Room, {
      foreignKey: 'room_id',
      targetKey: 'id',
      as: 'room',
    });
    view.belongsTo(models.Plan, {
      foreignKey: 'plan_id',
      targetKey: 'id',
      as: 'plan',
    });
    view.belongsTo(models.View, {
      foreignKey: 'view_id',
      targetKey: 'id',
      as: 'view',
    });
  };
  return view;
};
