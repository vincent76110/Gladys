const db = require('../../models');

/**
 * @description Create a new view
 * @param {Object} view - A view object.
 * @returns {Promise} - Resolve with the created view.
 * @example
 * view.create({
 *   name: 'my view'
 * });
 */
async function create(view) {
  // create view in DB
  const createdView = await db.View.create(view);
  const plainView = createdView.get({ plain: true });
  // add view to live store
  this.addView(plainView);
  // return created view
  return plainView;
}

module.exports = {
  create,
};
