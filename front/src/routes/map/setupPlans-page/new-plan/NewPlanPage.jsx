//import { connect } from 'unistore/preact';
import { Text, Localizer } from 'preact-i18n';
import { Link } from 'preact-router/match';
import { RequestStatus } from '../../../../utils/consts';
import cx from 'classnames';
import get from 'get-value';
import style from './style.css';
//import actions from '../../../../actions/dashboard/edit-boxes/editWeather';





const NewPlanPage = ({ children, ...props }) => (
  <div class={cx('container', style.containerWithMargin)}>
    <Link href="/dashboard/maps/setupPlans" class="btn btn-secondary btn-sm">
      <Text id="map.plans.setupPlans.newPlan.backButton" />
    </Link>
    <div class="row">
      <div class="col col-6 mx-auto">
        <form onSubmit={props.createPlan} class="card">
          <div class="card-body p-6">
            <div class="card-title">
              <Text id="map.plans.setupPlans.newPlan.cardTitle" />
            </div>
            {props.createPlanStatus === RequestStatus.ConflictError && (
              <div class="alert alert-danger">
                <Text id="map.plans.setupPlans.newPlan.planAlreadyExist" />
              </div>
            )}
            <div class="form-group">
              <label class="form-label">
                <Text id="map.plans.setupPlans.newPlan.name.label" />
              </label>
              
              <Localizer>
                <input
                  style="width:250px;"
                  type="text"
                  class={cx('form-control', {
                    'is-invalid': get(props, 'newPlanErrors.name')
                  })}
                  placeholder={<Text id="map.plans.setupPlans.newPlan.name.placeholder" />}
                  value={get(props, 'newPlan.name')}
                  onInput={props.updateNewPlanName}
                />
              </Localizer>
              <div class="invalid-feedback">
                <Text id="map.plans.setupPlans.newPlan.name.invalid" />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">
                <Text id="map.plans.setupPlans.newPlan.picture.label" />
              </label>

              {/* <Localizer>
                <input
                      type="url"
                      class={cx('form-control', {
                        'is-invalid': get(props, 'newPlanErrors.picture')
                      })}
                      style="width:400px;"
                      value={props.newPlanPicture}
                      placeholder={<Text id="map.plans.setupPlans.newPlan.picture.chooseFile" />}
                />
              </Localizer> */}

              <input type="file"
                id="fileSelector"
                class={cx('form-control', {
                  'is-invalid': get(props, 'newPlanErrors.picture')
                })}
                accept="image/png, image/jpeg"
                onChange={props.updatePlanPicture}
                /* value={props.newPlanPicture} */
              />

            </div>

            <div class="alert alert-info"><Text id="map.plans.setupPlans.newPlan.house.info" /></div>

                    
            <div class="form-group">
              <label class="form-label">
                <Text id="map.plans.setupPlans.newPlan.house.label" />
              </label>
              
              {/* <select onChange={props.updateBoxHouse} class="form-control">
                <option>
                  <Text id="global.emptySelectOption" />
                </option>
                {props.houses &&
                props.houses.map(house => (
                <option selected={house.selector === props.box.house} value={house.selector}>
                  {house.name}
                </option>
                ))}
              </select>
               */}
            </div>

            <div class="form-footer">
              <button
                onClick={props.createPlan}
                class="btn btn-primary btn-block"
                disabled={props.createPlanStatus === RequestStatus.Getting}
              >
                <Text id="map.plans.setupPlans.newPlan.createPlanButton" />
              </button>

              
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

/* let namefile = document.getElementById('fileSelector').getAttribute("type");


if(namefile !== null)
{
  console.log(namefile.files[0].name);
} */




/* @connect('houses', actions)
class NewPlanPageComponent extends Component {

  
  updateBoxHouse = e => {
    this.props.updateBoxConfig(this.props.x, this.props.y, {
      house: e.target.value
    });
  };

   componentDidMount() {
    this.props.getHouses();
  }

  render(props, {}) {
    return <NewPlanPage {...props} newPlanPicture={this.newPlanPicture} updateBoxHouse={this.updateBoxHouse} updatePlanPicture={this.updatePlanPicture} newPlanPictureName={props.newPlanPictureName} />;
  }
} */





export default NewPlanPage;
