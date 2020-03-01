/**
 * @description Add a plan to the plan manager.
 * @param {Object} plan - Plan object from DB.
 * @example
 * addPlan({
 *  selector: 'test'
 * });
 */
async function addPlan(plan) {
  this.plans[plan.selector] = plan;
}

module.exports = {
  addPlan,
};
