const { triggersFunc } = require('./view.triggers');
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
  const viewSelectors = Object.keys(this.views);

  // foreach views we have in RAM
  viewSelectors.forEach((viewSelector) => {
    // we check if the view has triggers
    if (this.views[viewSelector].triggers && this.views[viewSelector].triggers instanceof Array) {
      // if yes, we loop on each trigger
      this.views[viewSelector].triggers.forEach((trigger) => {
        logger.debug(`Checking trigger ${trigger.type}...`);
        // we check that trigger type is matching the event
        if (event.type === trigger.type) {
          logger.debug(`Trigger ${trigger.type} is matching with event`);
          // then we check the condition is verified
          const conditionVerified = triggersFunc[event.type](event, trigger);
          logger.debug(`Trigger ${trigger.type}, conditionVerified = ${conditionVerified}...`);

          // if yes, we execute the view
          if (conditionVerified) {
            this.execute(viewSelector, {
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
