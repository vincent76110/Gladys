const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');

/**
 * @private
 * @description This function return a plan picture
 * @name gladys.plan.getPicture
 * @param {string} id - The id of the plan.
 * @returns {Promise} Promise.
 * @example
 * await gladys.plan.getPicture('6b9bc8b7-b98d-4dda-b0fd-88fc10bd0b00');
 *
 */
async function getPicture(id) {
  const plan = await db.Plan.findByPk(id, {
    attributes: ['picture'],
  });
  if (plan === null) {
    throw new NotFoundError(`User not found`);
  }
  return plan.picture;
}

module.exports = {
  getPicture,
};
