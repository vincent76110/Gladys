const db = require('../../models');

/**
 * @description Create a new plan
 * @param {Object} plan - A plan object.
 * @returns {Promise} - Resolve with the created plan.
 * @example
 * plan.create({
 *   name: 'my plan'
 * });
 */
async function create(plan) {
  // create plan in DB
  const createdPlan = await db.Plan.create(plan);
  const plainPlan = createdPlan.get({ plain: true });
  // add plan to live store
  this.addPlan(plainPlan);
  // return created plan
  return plainPlan;
}

module.exports = {
  create,
};
