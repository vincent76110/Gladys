const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');

/**
 * @description Destroy a plan
 * @param {string} selector - The selector of the plan.
 * @example
 * plan.destroy('my-plan');
 */
async function destroy(selector) {
  const existingPlan = await db.Plan.findOne({
    where: {
      selector,
    },
  });

  if (existingPlan === null) {
    throw new NotFoundError('Plan not found');
  }

  await existingPlan.destroy();

  delete this.plans[selector];
}

module.exports = {
  destroy,
};
