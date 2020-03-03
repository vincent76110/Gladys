import { Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from '../../actions/plan';
//import { RequestStatus } from '../../utils/consts';
import HeaderPage from './header';


@connect('plans,currentUrl,plansGetStatus', actions)
class PlanMenuView extends Component {
  componentWillMount() {
    this.props.getPlans();
    
    //console.log(`index du header= ${this.props.getPlans().plans}`);
  }

  render(props, {}) { 
    console.log(`plans index du header= ${props.plans}`);
    //const loading = props.plansGetStatus === RequestStatus.Getting;
    console.log(`plansGetStatus index du header= ${props.plansGetStatus}`);
    console.log(`loading index du header= ${props.loading}`);
    return <HeaderPage {...props} />;
  }
}

export default PlanMenuView;
