/* const queue = require('queue'); */
const { addView } = require('./view.addView');
const { create } = require('./view.create');
const { checkTrigger } = require('./view.checkTrigger');
const { init } = require('./view.init');
const { destroy } = require('./view.destroy');
const { get } = require('./view.get');
const { getBySelector } = require('./view.getBySelector');
/* const { getByPlanSelector } = require('./view.getByPlanSelector'); */
const { getPicture } = require('./view.getPicture');
const { update } = require('./view.update');
/* const { EVENTS } = require('../../utils/constants');
const { eventFunctionWrapper } = require('../../utils/functionsWrapper'); */
const ViewManager = function ViewManager(
  stateManager, 
  event, 
  device, 
  message, 
  houseManager, 
  roomManager, 
  planManager
) {
  this.stateManager = stateManager;
  this.event = event;
  this.device = device;
  this.message = message;
  this.houseManager = houseManager;
  this.roomManager = roomManager;
  this.planManager = planManager;
  this.views = {};
  // @ts-ignore
/*   this.queue = queue({
    autostart: true,
    concurrency: 1,
  }); */
  /* this.event.on(EVENTS.TRIGGERS.CHECK, eventFunctionWrapper(this.checkTrigger.bind(this))); */
};

ViewManager.prototype.addView = addView;
ViewManager.prototype.create = create;
ViewManager.prototype.checkTrigger = checkTrigger;
ViewManager.prototype.destroy = destroy;
ViewManager.prototype.get = get;
ViewManager.prototype.init = init;
ViewManager.prototype.getBySelector = getBySelector;/* 
ViewManager.prototype.getByPlanSelector = getByPlanSelector; */
ViewManager.prototype.getPicture = getPicture;
ViewManager.prototype.update = update;
module.exports = ViewManager;
