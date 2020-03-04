import { Text } from 'preact-i18n';
import { Link } from 'preact-router/match';
//import ActionGroup from './ActionGroup';
import TriggerGroup from './TriggerGroup';
//import update from 'immutability-helper';

const EditPlanPage = ({ children, ...props }) => (
  <div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        <div class="container">
          <div class="page-header">
            <h1
              class="page-title"
              style={{
                marginRight: '20px'
              }}
            >
              <Link href="/dashboard/map/plan" class="btn btn-secondary btn-sm btn-block">
                ️ <Text id="map.plans.plansTab.editPlan.backButton" />
              </Link>
            </h1>
            <h1 class="page-title">Locataire MANVIN</h1>
            <div class="page-options d-flex">
              <button disabled={props.saving} class="btn btn-sm btn-success ml-2">
                <Text id="map.plans.plansTab.editPlan.saveButton" /> <i class="fe fe-save" />
              </button>
              <button class="btn btn-sm btn-danger ml-2">
                <Text id="map.plans.plansTab.editPlan.deleteButton" /> <i class="fe fe-trash" />
              </button>
            </div>
          </div>
          <div>
            {/* {props.error && (
              <div class="alert alert-danger">
                <Text id="editScene.saveSceneError" />
              </div>
            )} */}
            <div class="row">
              <TriggerGroup
                {...props}
                addTrigger={props.addTrigger}
              />
            </div>
            <div class="row" style={{ marginBottom: '1.5rem', fontSize: '35px' }}>
              <div class="col-lg-12">
                <div class="text-center">
                  <i class="fe fe-arrow-down" />
                </div>
              </div>
            </div>
          </div>
          {/* {props.scene.actions.map((parallelActions, index) => (
            <div>
              <div class="row">
                <ActionGroup
                  addAction={props.addAction}
                  actions={parallelActions}
                  deleteAction={props.deleteAction}
                  updateSelectedNewAction={props.updateSelectedNewAction}
                  updateActionProperty={props.updateActionProperty}
                  highLightedActions={props.highLightedActions}
                  sceneParamsData={props.sceneParamsData}
                  index={index}
                  saving={props.saving}
                  actionsGroupsBefore={update(props.scene.actions, {
                    $splice: [[index, props.scene.actions.length - index]]
                  })}
                  variables={props.variables}
                  setVariables={props.setVariables}
                />
              </div>
              {index + 1 < props.scene.actions.length && (
                <div class="row" style={{ marginBottom: '1.5rem', fontSize: '35px' }}>
                  <div class="col-lg-12">
                    <div class="text-center">
                      <i class="fe fe-arrow-down" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))} */}
        </div>
      </div>
    </div>
  </div>
);

export default EditPlanPage;