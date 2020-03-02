import { Component } from 'preact';
import { connect } from 'unistore/preact';
import MapPlansPage from './MapPlansPage';
import MapPage from './MapPage';
import actions from '../../../actions/plan';
import { RequestStatus } from '../../../utils/consts';

@connect('plans,currentUrl,plansGetStatus', actions)
class Map extends Component {
  componentWillMount() {
    this.props.getPlans();
  }

  render(props, {}) {
    const loading = props.plansGetStatus === RequestStatus.Getting;
    
    return (
      <MapPage>
        <MapPlansPage {...props} loading={loading} />
      </MapPage>
    );
    
  }
}

export default Map;
