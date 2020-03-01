const { Op } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../../models');

const DEFAULT_OPTIONS = {
  fields: ['id', 'house_id', 'room_id', 'name', 'selector', 'picture', 'created_at', 'updated_at'],
  skip: 0,
  order_dir: 'ASC',
  order_by: 'name',
};

/**
 * @description Get list of plans
 * @param {Object} [options] - Options of the query.
 * @example
 * const plans = await gladys.plan.get({
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

  const plans = await db.Plan.findAll(queryParams);

  const plansPlain = plans.map((plan) => plan.get({ plain: true }));

  return plansPlain;
}

module.exports = {
  get,
};
