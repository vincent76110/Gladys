const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');

/**
 * @description Get a view by plan selector
 * @param {string} selector - The selector of the view.
 * @returns {Promise} - Resolve with the view.
 * @example
 * gladys.view.getByPlanSelector('my-view');
 */
async function getByPlanSelector(selector) {
  console.log();
  const view = await db.Plan.findOne({
    where: {
      selector,
    },
  });

  if (view === null) {
    throw new NotFoundError('View not found');
  }

  return view.get({ plain: true });
}

module.exports = {
  getByPlanSelector,
};
