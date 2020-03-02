/**
 * @description Add a view to the view manager.
 * @param {Object} view - View object from DB.
 * @example
 * addView({
 *  selector: 'test'
 * });
 */
async function addView(view) {
  this.views[view.selector] = view;
}

module.exports = {
  addView,
};
