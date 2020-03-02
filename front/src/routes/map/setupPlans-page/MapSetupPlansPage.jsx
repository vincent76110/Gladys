import { Text, Localizer } from 'preact-i18n';
import { Link } from 'preact-router/match';
import cx from 'classnames';
import MapSetupPlansCards from './MapSetupPlansCards';
import EmptyState from './EmptyState';
import style from './style.css';

const MapSetupPlansPage = ({ children, ...props }) => (
  <div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        <div class="container">
          <div class="page-header">
            <div class="page-options d-flex">
              <select onChange={props.changeOrderDir} class="form-control custom-select w-auto">
                <option value="asc">
                  <Text id="scene.orderDirAsc" />
                </option>
                <option value="desc">
                  <Text id="scene.orderDirDesc" />
                </option>
              </select>
              <div class="input-icon ml-2">
                <span class="input-icon-addon">
                  <i class="fe fe-search" />
                </span>
                <Localizer>
                <input
                  type="text"
                  class="form-control w-10"
                  placeholder={<Text id="map.plans.setupPlans.search" />}
                  onInput={props.debouncedSearch}
                />
                </Localizer>
              </div>
              <Link href="/dashboard/maps/setupPlans/new" class="btn btn-outline-primary ml-2">
                <Text id="scene.newButton" /> <i class="fe fe-plus" />
              </Link>
            </div>
          </div>
          <div
            class={cx('dimmer', {
              active: props.loading
            })}
          >
            <div class="loader" />
            <div class={cx('dimmer-content', style.sceneListContainer)}>
              <div class="row">
                <div class="col-lg-8">
                  {props.scenes && <MapSetupPlansCards {...props} />}
                  {/* {props.scenes && props.scenes.length === 0 && <EmptyState />} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MapSetupPlansPage;
