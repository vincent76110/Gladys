import { RequestStatus } from '../utils/consts';
import update, { extend } from 'immutability-helper';
import debounce from 'debounce';

extend('$auto', function(value, object) {
  return object ? update(object, value) : update({}, value);
});

function createActions(store) {
  const actions = {
    async getViews(state) {
      store.setState({
        viewsGetStatus: RequestStatus.Getting
      });
      try {
        /* const orderDir = state.getViewsOrderDir || 'asc';
        const params = {
          order_dir: orderDir
        };
        if (state.viewSearch && state.viewSearch.length) {
          params.search = state.viewSearch;
        } */
        const views = await state.httpClient.get('/api/v1/view'/* , params */);
        store.setState({
          views,
          viewsGetStatus: RequestStatus.Success
        });
      } catch (e) {
        store.setState({
          viewsGetStatus: RequestStatus.Error
        });
      }
    },
    async search(state, e) {
      store.setState({
        viewSearch: e.target.value
      });
      await actions.getViews(store.getState());
    },
    async changeOrderDir(state, e) {
      store.setState({
        getViewsOrderDir: e.target.value
      });
      await actions.getViews(store.getState());
    }
  };
  actions.debouncedSearch = debounce(actions.search, 200);
  return actions;
}

export default createActions;
