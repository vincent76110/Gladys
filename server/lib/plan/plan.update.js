const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');

/**
 * @description Update a plan
 * @param {string} selector - The selector of the plan.
 * @param {Object} plan - A plan object.
 * @returns {Promise} - Resolve with the plan.
 * @example
 * plan.update('my-plan', {
 *   name: 'my plan'
 * });
 */
async function update(selector, plan) {
  const existingPlan = await db.Plan.findOne({
    where: {
      selector,
    },
  });

  if (existingPlan === null) {
    throw new NotFoundError('Plan not found');
  }

  await existingPlan.update(plan);

  const plainPlan = existingPlan.get({ plain: true });
  // add scene to live store
  this.addScene(plainPlan);
  // return updated scene
  return plainPlan;
}

module.exports = {
  update,
};
