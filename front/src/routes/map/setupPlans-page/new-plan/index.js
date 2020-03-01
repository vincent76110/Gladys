import { Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from '../../../../actions/createPlan';
import NewPlanPageComponent from './NewPlanPage';

@connect('newPlan,newPlanErrors,createPlanStatus', actions)
class NewPlan extends Component {
  componentWillMount() {
    this.props.initPlan();
  }

  render(props, {}) {
    return <NewPlanPageComponent {...props} />;
  }
}

export default NewPlan;
