import { RequestStatus } from '../utils/consts';
import update from 'immutability-helper';
import get from 'get-value';
import { route } from 'preact-router';
import { fileToBase64 } from '../utils/picture';


console.log("Entree createPlan");

function createActions(store) {
  console.log("createActions");
  const actions = {
    checkErrors(state) {
      let newPlanErrors = {};
      if (!state.newPlan.name) {
        newPlanErrors.name = true;
        console.log("newPlanErrors.name 1");
      }
      if (state.newPlan.name === 'new') {
        newPlanErrors.name = true;
        console.log("newPlanErrors.name 2");
      }
      /* if (!state.newPlan.picture) {
        newPlanErrors.picture = true;
      } */
      store.setState({
        newPlanErrors
      });
      return Object.keys(newPlanErrors).length > 0;
    },
    async createPlan(state, e) {
      console.log("createPlan");
      e.preventDefault();
      // if errored, we don't continue
      if (actions.checkErrors(state)) {
        console.log(actions.checkErrors);
        return;
      }
      store.setState({
        createPlanStatus: RequestStatus.Getting
      });
      try {
        const createdPlan = await state.httpClient.post('/api/v1/maps/setupPlans', state.newPlan);
        store.setState({
          createPlanStatus: RequestStatus.Success
        });
        route(`/dashboard/maps/setupPlans/${createdPlan.selector}`);
      } catch (e) {
        const status = get(e, 'response.status');
        
        if (status === 409) {
          store.setState({
            createPlanStatus: RequestStatus.ConflictError
          });
        } else {
          store.setState({
            createPlanStatus: RequestStatus.Error
          });
          console.log(RequestStatus.Error);
        }
      }
    },
    initPlan(state) {
      
  console.log("initPlan");
      store.setState({
        newPlan: {
          name: null,
          icon: null,
          actions: [[]]
        },
        newPlanErrors: null,
        createPlanStatus: null
      });
    },
    updateNewPlanName(state, e) {
      console.log("updateNewPlanName");
      const newState = update(state, {
        newPlan: {
          name: {
            $set: e.target.value
          }
        }
      });
      store.setState(newState);
      if (state.newPlanErrors) {
        actions.checkErrors(store.getState());
      }
    },
    async updatePlanPicture(state, e) {
      console.log("Debut updatePlanPicture");
      const base64Image = await fileToBase64(e.target.files[0]);
      const newState = update(state, {
          newPlanPicture: {
              $set: console.log(base64Image)
          } ,
          newPlanPictureName: {
              $set: e.target.value
              //console.log(e.target.value)
          }

          
      });

      console.log("Fin updatePlanPicture");

      store.setState(newState);
    }
  };
  return actions;
}

export default createActions;
