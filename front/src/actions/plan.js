import { RequestStatus } from '../utils/consts';
import update, { extend } from 'immutability-helper';
import debounce from 'debounce';

extend('$auto', function(value, object) {
  return object ? update(object, value) : update({}, value);
});

function createActions(store) {
  const actions = {
    async getPlans(state) {
      console.log(` Action plan= `);
      store.setState({
        plansGetStatus: RequestStatus.Getting
      });
      try {
        console.log(`getPlans action plan= try`);
        const orderDir = state.getPlansOrderDir || 'asc';
        const params = {
          order_dir: orderDir
        };
        if (state.planSearch && state.planSearch.length) {
          params.search = state.planSearch;
        }
        const plans = await state.httpClient.get('/api/v1/map/plan', params);
        console.log(`getPlans action plan= ${plans[0].name}`);
        console.log(`getPlans action plan= ${plans[1].name}`);
        store.setState({
          plans,
          plansGetStatus: RequestStatus.Success
        });
      } catch (e) {
        console.log(`getPlans action plan= catch`);
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
