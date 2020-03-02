const db = require('../../models');

/**
 * @description Load all views from the database to the trigger store.
 * @returns {Promise} Resolve when success.
 * @example
 * view.init();
 */
async function init() {
  const views = await db.View.findAll();
  const plainViews = views.map((view) => {
    const plainView = view.get({ plain: true });
    this.addView(plainView);
    return plainView;
  });
  return plainViews;
}

module.exports = {
  init,
};
