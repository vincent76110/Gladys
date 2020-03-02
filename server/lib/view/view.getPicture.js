const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');

/**
 * @private
 * @description This function return a view picture
 * @name gladys.view.getPicture
 * @param {string} id - The id of the view.
 * @returns {Promise} Promise.
 * @example
 * await gladys.view.getPicture('6b9bc8b7-b98d-4dda-b0fd-88fc10bd0b00');
 *
 */
async function getPicture(id) {
  const view = await db.View.findByPk(id, {
    attributes: ['picture'],
  });
  if (view === null) {
    throw new NotFoundError(`User not found`);
  }
  return view.picture;
}

module.exports = {
  getPicture,
};
