const asyncMiddleware = require('../middlewares/asyncMiddleware');
/* const { EVENTS, ACTIONS, ACTIONS_STATUS } = require('../../utils/constants'); */

/**
 * @apiDefine PlanParam
 * @apiParamExample {json} Request-Example:
 *  {
 *    "name": "New Plan",
 *    "actions": [{
 *      "type": "house.arm",
 *      "house": "main-house",
 *     }],
 *  }
 */
console.log('Entrée plan.controler');

module.exports = function PlanController(gladys) {
  /**
   * @api {post} /api/v1/map/plan create
   * @apiName create
   * @apiGroup Plan
   * @apiUse PlanParam
   */
  async function create(req, res) {
    console.log(req.body.pictureName);
    /* const base64Data = await req.body.replace('/^data:image\\/png;base64,/', '');
    console.log(base64Data); */
    console.log('Entrée plan.controler - create');
    const newPlan = await gladys.plan.create(req.body);
    console.log('newPlan =' && newPlan);
    res.status(201).json(newPlan);
    console.log('newPlan =' && newPlan);
    console.log('Sortie plan.controler - create');
  }

  /**
   * @api {patch} /api/v1/map/plan/:plan_selector update
   * @apiName update
   * @apiGroup Plan
   * @apiUse PlanParam
   */
  async function update(req, res) {
    console.log('Coucou 1 update');
    const newPlan = await gladys.plan.update(req.params.plan_selector, req.body);
    res.json(newPlan);
    
    console.log('Coucou 2 update');
  }

  /**
   * @api {get} /api/v1/map/plan get
   * @apiName get
   * @apiGroup Plan
   *
   */
  async function get(req, res) {
    console.log('Coucou plan 1 get');
    const plans = await gladys.plan.get(req.query);
    res.json(plans);
    console.log('Coucou plan 2 get');
  }
  /**
   * @api {get} /api/v1/map/plan/:plan_selector get by selector
   * @apiName getBySelector
   * @apiGroup Plan
   *
   */
  async function getBySelector(req, res) {
    console.log('Coucou 1 plan getBySelector');
    const plan = await gladys.plan.getBySelector(req.params.plan_selector);
    res.json(plan);
    console.log('Coucou 2 plan getBySelector');
  }
  /**
   * @api {delete} /api/v1/map/plan/:plan_selector delete
   * @apiName delete
   * @apiGroup Plan
   *
   */
  async function destroy(req, res) {
    await gladys.plan.destroy(req.params.plan_selector);
    res.json({
      success: true,
    });
  }
  /**
   * @api {get} /api/v1/map/plan/picture getPicture
   * @apiName getPicture
   * @apiGroup Plan
   *
   */
  async function getPicture(req, res, next) {
    console.log('Coucou 1 getPicture');
    const picture = await gladys.plan.getPicture(req.params.map_selector);
    res.send(picture);
    console.log('Coucou 2 getPicture');
  }
  console.log('Sortie plan.controler');
  return Object.freeze({
    create: asyncMiddleware(create),
    destroy: asyncMiddleware(destroy),
    get: asyncMiddleware(get),
    getBySelector: asyncMiddleware(getBySelector),
    getPicture: asyncMiddleware(getPicture),
    update: asyncMiddleware(update),
  });
};
