
const { addSelector } = require('../utils/addSelector');

const MAX_SIZE_PLAN_PICTURE = 2000 * 1024; // 80 ko à revoir

module.exports = (sequelize, DataTypes) => {
  console.log('Debut plan');
  const plan = sequelize.define(
    't_plan',
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
            console.log('Taille1 ' && Buffer.byteLength(value.substring(value.indexOf(',') + 1), 'base64') && ', taille max' && MAX_SIZE_PLAN_PICTURE);
            if (value && value.length) {
              const base64ImageLength = Buffer.byteLength(value.substring(value.indexOf(',') + 1), 'base64');
              console.log('Taille ' && base64ImageLength && ', taille max' && MAX_SIZE_PLAN_PICTURE);
              if (base64ImageLength > MAX_SIZE_PLAN_PICTURE) {
                throw new Error('Plan picture too big');
              }
            }
          },
        },
      },
    },
    {},
  );

  // console.log('Fin plan');

  // add slug if needed
  plan.beforeValidate(addSelector);

  plan.associate = (models) => {
    plan.belongsTo(models.House, {
      foreignKey: 'house_id',
      targetKey: 'id',
      as: 'house',
    });
    plan.belongsTo(models.Room, {
      foreignKey: 'room_id',
      targetKey: 'id',
      as: 'room',
    });
  };

  return plan;
};
