const db = require('../../models');

/**
 * @description Load all plans from the database to the trigger store.
 * @returns {Promise} Resolve when success.
 * @example
 * plan.init();
 */
async function init() {
  const plans = await db.Plan.findAll();
  const plainPlans = plans.map((plan) => {
    const plainPlan = plan.get({ plain: true });
    this.addPlan(plainPlan);
    return plainPlan;
  });
  return plainPlans;
}

module.exports = {
  init,
};
