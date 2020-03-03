const asyncMiddleware = require('../middlewares/asyncMiddleware');
/* const { EVENTS, ACTIONS, ACTIONS_STATUS } = require('../../utils/constants'); */

/**
 * @apiDefine ViewParam
 * @apiParamExample {json} Request-Example:
 *  {
 *    "name": "New View",
 *    "actions": [{
 *      "type": "house.arm",
 *      "house": "main-house",
 *     }],
 *  }
 */
console.log('Entrée view.controler');

module.exports = function ViewController(gladys) {
  /**
   * @api {post} /api/v1/view create
   * @apiName create
   * @apiGroup View
   * @apiUse ViewParam
   */
  async function create(req, res) {
    console.log(req.body.pictureName);
    /* const base64Data = await req.body.replace('/^data:image\\/png;base64,/', '');
    console.log(base64Data); */
    console.log('Entrée view.controler - create');
    const newView = await gladys.view.create(req.body);
    console.log('newView =' && newView);
    res.status(201).json(newView);
    console.log('newView =' && newView);
    console.log('Sortie view.controler - create');
  }

  /**
   * @api {patch} /api/v1/view/:view_selector update
   * @apiName update
   * @apiGroup View
   * @apiUse ViewParam
   */
  async function update(req, res) {
    console.log('Coucou 1 update');
    const newView = await gladys.view.update(req.params.view_selector, req.body);
    res.json(newView);
    
    console.log('Coucou 2 update');
  }

  /**
   * @api {get} /api/v1/view get
   * @apiName get
   * @apiGroup View
   *
   */
  async function get(req, res) {
    console.log('Coucou 1 get View controller');
    console.log(`req.query= ${req.query}`);
    const views = await gladys.view.get(req.query);
    res.json(views);
    console.log('Coucou 2 get View controller');
  }
  /**
   * @api {get} /api/v1/view/:plan_selector get by plan selector
   * @apiName getByPlanSelector
   * @apiGroup View
   *
   */
  async function getByPlanSelector(req, res) {
    console.log('Coucou 1 getByPlanSelector View controller');
    const view = await gladys.view.getByPlanSelector(req.params.plan_selector);
    res.json(view);
    console.log('Coucou 2 getByPlanSelector');
  }
  /**
   * @api {get} /api/v1/view/:view_selector get by selector
   * @apiName getBySelector
   * @apiGroup View
   *
   */
  async function getBySelector(req, res) {
    console.log(`Coucou 1 getBySelector View controller ${req.params.view_selector}`);
    const view = await gladys.view.getBySelector(req.params.view_selector);
    res.json(view);
    console.log('Coucou 2 getBySelector View controller');
  }
  /**
   * @api {delete} /api/v1/view/:view_selector delete
   * @apiName delete
   * @apiGroup View
   *
   */
  async function destroy(req, res) {
    await gladys.view.destroy(req.params.view_selector);
    res.json({
      success: true,
    });
  }
  /**
   * @api {get} /api/v1/view/picture getPicture
   * @apiName getPicture
   * @apiGroup View
   *
   */
  async function getPicture(req, res, next) {
    console.log('Coucou 1 getPicture View controller');
    const picture = await gladys.view.getPicture(req.params.map_selector);
    res.send(picture);
    console.log('Coucou 2 getPicture View controller');
  }
  console.log('Sortie view.controler View controller');
  return Object.freeze({
    create: asyncMiddleware(create),
    destroy: asyncMiddleware(destroy),
    get: asyncMiddleware(get),
    getBySelector: asyncMiddleware(getBySelector),
    getByPlanSelector: asyncMiddleware(getByPlanSelector),
    getPicture: asyncMiddleware(getPicture),
    update: asyncMiddleware(update),
  });
};
