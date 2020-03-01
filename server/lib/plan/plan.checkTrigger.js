const { triggersFunc } = require('./plan.triggers');
const logger = require('../../utils/logger');

/**
 * @description checkTrigger verify if the current event verify
 * a trigger.
 * @param {Object} event - The event to check.
 * @example
 * checkTrigger({ type: 'device.new-state' })
 */
function checkTrigger(event) {
  logger.debug(`Trigger: new event checkTrigger "${event.type}"`);
  if (!triggersFunc[event.type]) {
    throw new Error(`Trigger type "${event.type}" has no checker function.`);
  }
  const planSelectors = Object.keys(this.plans);

  // foreach plans we have in RAM
  planSelectors.forEach((planSelector) => {
    // we check if the plan has triggers
    if (this.plans[planSelector].triggers && this.plans[planSelector].triggers instanceof Array) {
      // if yes, we loop on each trigger
      this.plans[planSelector].triggers.forEach((trigger) => {
        logger.debug(`Checking trigger ${trigger.type}...`);
        // we check that trigger type is matching the event
        if (event.type === trigger.type) {
          logger.debug(`Trigger ${trigger.type} is matching with event`);
          // then we check the condition is verified
          const conditionVerified = triggersFunc[event.type](event, trigger);
          logger.debug(`Trigger ${trigger.type}, conditionVerified = ${conditionVerified}...`);

          // if yes, we execute the plan
          if (conditionVerified) {
            this.execute(planSelector, {
              triggerEvent: event,
            });
          }
        }
      });
    }
  });
}

module.exports = {
  checkTrigger,
};
