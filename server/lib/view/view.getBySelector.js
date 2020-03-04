const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');

/**
 * @description Get a view by selector
 * @param {string} selector - The selector of the view.
 * @returns {Promise} - Resolve with the view.
 * @example
 * gladys.view.getBySelector('my-view');
 */
async function getBySelector(selector) {
  console.log(`Coucou 1 getBySelector view.getBySelector`);
  const view = await db.View.findOne({
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
  getBySelector,
};
