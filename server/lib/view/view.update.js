const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');

/**
 * @description Update a view
 * @param {string} selector - The selector of the view.
 * @param {Object} view - A view object.
 * @returns {Promise} - Resolve with the view.
 * @example
 * view.update('my-view', {
 *   name: 'my view'
 * });
 */
async function update(selector, view) {
  const existingView = await db.View.findOne({
    where: {
      selector,
    },
  });

  if (existingView === null) {
    throw new NotFoundError('View not found');
  }

  await existingView.update(view);

  const plainView = existingView.get({ plain: true });
  // add scene to live store
  this.addScene(plainView);
  // return updated scene
  return plainView;
}

module.exports = {
  update,
};
