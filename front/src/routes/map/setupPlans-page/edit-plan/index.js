import { Component } from 'preact';
import { connect } from 'unistore/preact';
/* import update from 'immutability-helper';
import { route } from 'preact-router'; */

import { RequestStatus } from '../../../../utils/consts';
import EditPlanPage from './EditPlanPage';

@connect('session,httpClient', {})
class EditPlan extends Component {
  getSceneBySelector = async () => {
    this.setState({
      SceneGetStatus: RequestStatus.Getting
    });
    try {
      const scene = await this.props.httpClient.get(`/api/v1/scene/${this.props.scene_selector}`);
      if (scene.actions[scene.actions.length - 1].length > 0) {
        scene.actions.push([]);
      }
      if (!scene.triggers) {
        scene.triggers = [];
      }
      const variables = [];
      scene.actions.forEach(actionGroup => {
        variables.push(actionGroup.map(action => []));
      });
      this.setState({
        scene,
        variables,
        SceneGetStatus: RequestStatus.Success
      });
    } catch (e) {
      this.setState({
        SceneGetStatus: RequestStatus.Error
      });
    } 
  };
  
  componentDidMount() {
    this.getSceneBySelector();
    this.props.session.dispatcher.addListener('scene.executing-action', payload =>
      this.highlighCurrentlyExecutedAction(payload)
    );
    this.props.session.dispatcher.addListener('scene.finished-executing-action', payload =>
      this.removeHighlighAction(payload)
    );
  }

  render(props, { saving, error, variables, scene }) {
    return (
      /* scene &&  */(
        <EditPlanPage
          {...props}
        />
      )
    );
  }
}

export default EditPlan;
