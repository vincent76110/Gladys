import { Component } from 'preact';
import { connect } from 'unistore/preact';
import ViewPage from './ViewPage';
import actions from '../../actions/dashboard';

@connect(
  'user,dashboardEditMode,dashboardNotConfigured,editDashboardDragEnable,homeDashboard,gatewayInstanceNotFound',
  actions
)
class Dashboard extends Component {
  componentWillMount() {
    this.props.getBoxes();
  }

  render(props, {}) {
    return <ViewPage {...props} />;
  }
}

export default Dashboard;
