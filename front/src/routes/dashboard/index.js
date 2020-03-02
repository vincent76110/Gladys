import { Component } from 'preact';
import { connect } from 'unistore/preact';
import DashboardPage from './DashboardPage';
import actions from '../../actions/scene';
import { RequestStatus } from '../../utils/consts';

@connect('scenes,currentUrl,scenesGetStatus', actions)
class Dashboard extends Component {
  render(props, {}) {
    const loading = props.scenesGetStatus === RequestStatus.Getting;
    
    return (
      <DashboardPage {...props} loading={loading} />
    );  
    
  }
}

export default Dashboard;
