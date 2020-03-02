const { Op } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../../models');

const DEFAULT_OPTIONS = {
  fields: ['id', 'house_id', 'room_id', 'plan_id', 'view_id', 'name', 'selector', 'picture', 'pictureName', 'deviceFeature', 'created_at', 'updated_at'],
  skip: 0,
  order_dir: 'ASC',
  order_by: 'name',
};

/**
 * @description Get list of views
 * @param {Object} [options] - Options of the query.
 * @example
 * const views = await gladys.view.get({
 *  take: 20,
 *  skip: 0
 * });
 */
async function get(options) {
  const optionsWithDefault = Object.assign({}, DEFAULT_OPTIONS, options);

  const queryParams = {
    attributes: optionsWithDefault.fields,
    offset: optionsWithDefault.skip,
    order: [[optionsWithDefault.order_by, optionsWithDefault.order_dir]],
  };

  if (optionsWithDefault.take !== undefined) {
    queryParams.limit = optionsWithDefault.take;
  }

  if (optionsWithDefault.search) {
    queryParams.where = Sequelize.where(Sequelize.fn('lower', Sequelize.col('name')), {
      [Op.like]: `%${optionsWithDefault.search}%`,
    });
  }

  const views = await db.View.findAll(queryParams);

  const viewsPlain = views.map((view) => view.get({ plain: true }));

  return viewsPlain;
}

module.exports = {
  get,
};
