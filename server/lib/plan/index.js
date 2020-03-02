/* const queue = require('queue'); */
const { addPlan } = require('./plan.addPlan');
const { create } = require('./plan.create');
const { checkTrigger } = require('./plan.checkTrigger');
const { init } = require('./plan.init');
const { destroy } = require('./plan.destroy');
const { get } = require('./plan.get');
const { getBySelector } = require('./plan.getBySelector');
const { getPicture } = require('./plan.getPicture');
const { update } = require('./plan.update');
/* const { EVENTS } = require('../../utils/constants');
const { eventFunctionWrapper } = require('../../utils/functionsWrapper'); */
console.log('Entree index lib/plan');
const PlanManager = function PlanManager(stateManager, event, device, message) {
  this.stateManager = stateManager;
  this.event = event;
  this.device = device;
  this.message = message;
  this.plans = {};
  // @ts-ignore
/*   this.queue = queue({
    autostart: true,
    concurrency: 1,
  }); */
  /* this.event.on(EVENTS.TRIGGERS.CHECK, eventFunctionWrapper(this.checkTrigger.bind(this))); */
};

PlanManager.prototype.addPlan = addPlan;
console.log('Sortie addPlan lib/plan');
PlanManager.prototype.create = create;
console.log('Sortie create lib/plan');
PlanManager.prototype.checkTrigger = checkTrigger;
console.log('Sortie checkTrigger lib/plan');
PlanManager.prototype.destroy = destroy;
PlanManager.prototype.get = get;
PlanManager.prototype.init = init;
PlanManager.prototype.getBySelector = getBySelector;
PlanManager.prototype.getPicture = getPicture;
PlanManager.prototype.update = update;
console.log('Sortie update lib/plan');
module.exports = PlanManager;
