import { Component } from 'preact';
import { connect } from 'unistore/preact';
import ViewPage from './ViewPage';
import actions from '../../actions/view';
import { RequestStatus } from '../../utils/consts';

@connect('scenes,currentUrl,scenesGetStatus', actions)
class View extends Component {
  componentWillMount() {
    this.props.getViews();
  }

  render(props, {}) { 
    const loading = props.viewGetStatus === RequestStatus.Getting;
    return <ViewPage {...props} loading={loading} />;
  }
}

export default View;
