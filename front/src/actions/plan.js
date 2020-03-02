import { RequestStatus } from '../utils/consts';
import update, { extend } from 'immutability-helper';
import debounce from 'debounce';

extend('$auto', function(value, object) {
  return object ? update(object, value) : update({}, value);
});

function createActions(store) {
  const actions = {
    async getPlans(state) {
      store.setState({
        plansGetStatus: RequestStatus.Getting
      });
      try {
        const orderDir = state.getPlansOrderDir || 'asc';
        const params = {
          order_dir: orderDir
        };
        if (state.planSearch && state.planSearch.length) {
          params.search = state.planSearch;
        }
        const plans = await state.httpClient.get('/api/v1/plan', params);
        store.setState({
          plans,
          plansGetStatus: RequestStatus.Success
        });
      } catch (e) {
        store.setState({
          plansGetStatus: RequestStatus.Error
        });
      }
    },
    async search(state, e) {
      store.setState({
        planSearch: e.target.value
      });
      await actions.getPlans(store.getState());
    },
    async changeOrderDir(state, e) {
      store.setState({
        getPlansOrderDir: e.target.value
      });
      await actions.getPlans(store.getState());
    }
  };
  actions.debouncedSearch = debounce(actions.search, 200);
  return actions;
}

export default createActions;
