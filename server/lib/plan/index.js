const queue = require('queue');
const { addPlan } = require('./plan.addPlan');
const { create } = require('./plan.create');
const { checkTrigger } = require('./plan.checkTrigger');
const { init } = require('./plan.init');
const { destroy } = require('./plan.destroy');
const { get } = require('./plan.get');
const { getBySelector } = require('./plan.getBySelector');
const { update } = require('./plan.update');
const { EVENTS } = require('../../utils/constants');
const { eventFunctionWrapper } = require('../../utils/functionsWrapper');

const PlanManager = function PlanManager(stateManager, event, device, message) {
  this.stateManager = stateManager;
  this.event = event;
  this.device = device;
  this.message = message;
  this.plans = {};
  // @ts-ignore
  this.queue = queue({
    autostart: true,
    concurrency: 1,
  });
  this.event.on(EVENTS.TRIGGERS.CHECK, eventFunctionWrapper(this.checkTrigger.bind(this)));
};

PlanManager.prototype.addPlan = addPlan;
PlanManager.prototype.create = create;
PlanManager.prototype.checkTrigger = checkTrigger;
PlanManager.prototype.destroy = destroy;
PlanManager.prototype.get = get;
PlanManager.prototype.init = init;
PlanManager.prototype.getBySelector = getBySelector;
PlanManager.prototype.update = update;
module.exports = PlanManager;
