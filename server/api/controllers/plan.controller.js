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
console.log('Coucou fichier1');

module.exports = function PlanController(gladys) {
  console.log('Coucou fichier2');
  /**
   * @api {post} /api/v1/maps/setupPlans create
   * @apiName create
   * @apiGroup Plan
   * @apiUse PlanParam
   */
  async function create(req, res) {
    console.log('Coucou 1 create');
    const newPlan = await gladys.plan.create(req.body);
    console.log('newPlan' && newPlan);
    res.status(201).json(newPlan);
    console.log('Coucou 2 create');
  }

  /**
   * @api {patch} /api/v1/maps/setupPlans/:plan_selector update
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
   * @api {get} /api/v1/maps/setupPlans get
   * @apiName get
   * @apiGroup Plan
   *
   */
  async function get(req, res) {
    console.log('Coucou 1 get');
    const plans = await gladys.plan.get(req.query);
    res.json(plans);
    console.log('Coucou 2 get');
  }
  console.log('Coucou fichier3');
  /**
   * @api {get} /api/v1/maps/setupPlans/:plan_selector get by selector
   * @apiName getBySelector
   * @apiGroup Plan
   *
   */
  async function getBySelector(req, res) {
    console.log('Coucou 1 getBySelector');
    const plan = await gladys.plan.getBySelector(req.params.plan_selector);
    res.json(plan);
    console.log('Coucou 2 getBySelector');
  }
  console.log('Coucou fichier4');
  /**
   * @api {delete} /api/v1/maps/setupPlans/:plan_selector delete
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
  console.log('Coucou fichier5');
  /**
   * @api {get} /api/v1/maps/setupPlans/picture getPicture
   * @apiName getPicture
   * @apiGroup User
   *
   */
  async function getPicture(req, res, next) {
    console.log('Coucou 1 getPicture');
    const picture = await gladys.map.getPicture(req.params.map_selector);
    res.send(picture);
    console.log('Coucou 2 getPicture');
  }
  console.log('Coucou fichier6');
  return Object.freeze({
    create: asyncMiddleware(create),
    destroy: asyncMiddleware(destroy),
    get: asyncMiddleware(get),
    getBySelector: asyncMiddleware(getBySelector),
    getPicture: asyncMiddleware(getPicture),
    update: asyncMiddleware(update),
  });
};
