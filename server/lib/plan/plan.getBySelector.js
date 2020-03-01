const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');

/**
 * @description Get a plan by selector
 * @param {string} selector - The selector of the plan.
 * @returns {Promise} - Resolve with the plan.
 * @example
 * gladys.plan.getBySelector('my-plan');
 */
async function getBySelector(selector) {
  const plan = await db.Plan.findOne({
    where: {
      selector,
    },
  });

  if (plan === null) {
    throw new NotFoundError('Plan not found');
  }

  return plan.get({ plain: true });
}

module.exports = {
  getBySelector,
};
