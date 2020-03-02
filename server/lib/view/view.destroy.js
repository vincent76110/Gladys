const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');

/**
 * @description Destroy a view
 * @param {string} selector - The selector of the view.
 * @example
 * view.destroy('my-view');
 */
async function destroy(selector) {
  const existingView = await db.View.findOne({
    where: {
      selector,
    },
  });

  if (existingView === null) {
    throw new NotFoundError('View not found');
  }

  await existingView.destroy();

  delete this.views[selector];
}

module.exports = {
  destroy,
};
