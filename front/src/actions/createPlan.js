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
      if (!state.newPlan.picture) {
        newPlanErrors.picture = true;
      }
      store.setState({
        newPlanErrors
      });
      return Object.keys(newPlanErrors).length > 0;
    },
    async createPlan(state, e) {
      console.log("createPlan");
      console.log(state.newPlan.picture);
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
        const createdPlan = await state.httpClient.post('/api/v1/map/plan', state.newPlan);

        // this.state.filePicture.copy("/assets/plans");

        store.setState({
          createPlanStatus: RequestStatus.Success
        });
        route(`/dashboard/map/plan/${createdPlan.selector}`);
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
          picture: null,
          pictureName: null,
          
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
          
          newPlan: {
            picture: {
              $set: base64Image
            },
            pictureName: {
              $set: e.target.value.replace("C:\\fakepath\\","")
            },
          },
      });

      console.log(newState);
      console.log("Fin updatePlanPicture");
      store.setState(newState);
    },
    async getHouses(state) {
      store.setState({
        newPlanStatus: RequestStatus.Getting
      });
      try {
        const houses = await state.httpClient.get('/api/v1/house');
        store.setState({
          houses,
          newPlanStatus: RequestStatus.Success
        });
      } catch (e) {
        store.setState({
          newPlanStatus: RequestStatus.Error
        });
      }
    }

  };
  return actions;
}

export default createActions;