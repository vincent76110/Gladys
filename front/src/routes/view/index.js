import { Component } from 'preact';
import { connect } from 'unistore/preact';
import ViewPage from './ViewPage';
import actions from '../../actions/view';
import { RequestStatus } from '../../utils/consts';

@connect('views,currentUrl,viewsGetStatus', actions)
class View extends Component {
  componentWillMount() {
    this.props.getViews();
  }

  render(props, {}) { 
    const loading = props.viewsGetStatus === RequestStatus.Getting;
    return <ViewPage {...props} loading={loading} />;
  }
}

export default View;
