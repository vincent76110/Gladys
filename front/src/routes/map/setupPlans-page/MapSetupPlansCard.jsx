import { Text } from 'preact-i18n';
import { Component } from 'preact';
import { Link } from 'preact-router/match';
//import style from './style.css';

class MapSetupPlansCard extends Component {
  startScene = () => {
    this.props.startScene(this.props.scene.selector);
  };

  render(props, {}) {
    return (
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100">
          <div class="card-body p-3 text-center">
            <h4 name="name">Locataire MANVIN</h4>
          </div>
          <div class="card-footer">
            <div class="btn-list text-center">
              <Link href={`${props.currentUrl}/Locataire-MANVIN`} class="btn btn-outline-primary btn-sm">
                <i class="fe fe-edit" />
                <Text id="scene.editButton" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MapSetupPlansCard;
