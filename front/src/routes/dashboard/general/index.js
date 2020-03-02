import { Component } from 'preact';
import { connect } from 'unistore/preact';
import DashboardGeneralPage from './DashboardGeneralPage';
import DashboardPage from '../DashboardPage';
import actions from '../../../actions/dashboard';

@connect(
  'user,dashboardEditMode,dashboardNotConfigured,editDashboardDragEnable,homeDashboard,gatewayInstanceNotFound',
  actions
)
class Dashboard extends Component {
  componentWillMount() {
    this.props.getBoxes();
  }

  render(props, {}) {
    return (<DashboardPage {...props}>
              <DashboardGeneralPage {...props} />
            </DashboardPage>);
  }
}

export default Dashboard;
