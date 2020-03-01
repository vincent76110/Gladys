import { h } from 'preact';
import { Text } from 'preact-i18n';
import cx from 'classnames';
import TriggerCard from './TriggerCard';

const TriggerGroup = ({ children, ...props }) => (
  <div class="col">
    <div class="card">
      <div class="card-status bg-green" />
      <div class="card-header">
        <h4 class="text-center card-title ">
          <Text id="map.plans.setupPlans.editPlan.triggersTitle" />
        </h4>
        <div class="card-options">
          <button class="btn btn-outline-primary" onClick={props.addTrigger}>
            <Text id="map.plans.setupPlans.editPlan.addNewTriggerButton" /> <i class="fe fe-plus" />
          </button>
        </div>
      </div>
      <div class="card-body">
        <div
          class={cx('dimmer', {
            active: props.saving
          })}
        >
          <div class="loader" />
          <div class="dimmer-content">
            {props.triggers && props.triggers.length > 0 && (
              <div class="alert alert-info">
                <Text id="editScene.triggersDescription" />
              </div>
            )}
            {/* props.triggers && props.triggers.length === 0 && */ (
              <div class="text-center">
                <Text id="map.plans.setupPlans.editPlan.noTriggersYet" />
              </div>
            )}
            <div class="row">
              { props.triggers &&
                props.triggers.map((trigger, index) => (
                  <div class="col-lg-6">
                    <TriggerCard
                      /* triggers={props.scene.triggers}
                      addTrigger={props.addTrigger}
                      deleteTrigger={props.deleteTrigger}
                      updateTriggerProperty={props.updateTriggerProperty}
                      saving={props.saving} */
                      {...props}
                      //addTrigger={props.addTrigger}
                    />
                  </div>
                 ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TriggerGroup;
