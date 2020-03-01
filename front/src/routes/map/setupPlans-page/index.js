import { Component } from 'preact';
import { connect } from 'unistore/preact';
import MapSetupPlansPage from './MapSetupPlansPage';
import MapPage from './MapPage';
import actions from '../../../actions/scene';
import { RequestStatus } from '../../../utils/consts';

@connect('scenes,currentUrl,scenesGetStatus', actions)
class Map extends Component {
  componentWillMount() {
    this.props.getScenes();
  }

  render(props, {}) {
    const loading = props.scenesGetStatus === RequestStatus.Getting;
    
    return (
      <MapPage>
        <MapSetupPlansPage {...props} loading={loading} />
      </MapPage>
    );
    
  }
}

export default Map;
