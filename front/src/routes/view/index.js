/* import { Component } from 'preact';
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

export default View; */








































import { Component } from 'preact';
import { connect } from 'unistore/preact';
import update from 'immutability-helper';

import { RequestStatus } from '../../utils/consts';
import ViewPage from './ViewPage';

@connect('session,httpClient,views,currentUrl,viewsGetStatus')
class View extends Component {
  getPlanBySelector = async () => {
    //console.log(`getViews state= ${this.props.views_selector}`);
    this.setState({
      PlanGetStatus: RequestStatus.Getting
    });
    try {
      console.log(`plan try et ${this.props.view_selector}`);
      console.log(`${this.props.plan_selector}`);
      const plan = await this.props.httpClient.get(`/api/v1/map/plan/${this.props.view_selector}`);
      /* if (view.deviceFeature[view.deviceFeature.length - 1].length > 0) {
        console.log(`view = `);
        view.deviceFeature.push([]);
      }
      if (!view.triggers) {
        console.log(`view = `);
        view.triggers = [];
      } */
      console.log(` aaaaaaaaaaaaaaaaaaa plan.pictureName = ${plan.pictureName}`);
      console.log(`aaaaaaaaaaaaaaaaaaaa plan.name = ${plan.name}`);
      console.log(`aaaaaaaaaaaaaaaaaaaa plan.name = ${plan.plan_id}`);
      /* const variables = [];
      view.deviceFeature.forEach(actionGroup => {
        console.log(`view = `);
        variables.push(actionGroup.map(action => []));
      });
      */
      this.setState({
        plan,
        PlanGetStatus: RequestStatus.Success
      });
    } catch (e) {
      console.log(`plan catch`);
      this.setState({
        PlanGetStatus: RequestStatus.Error
      });
    }
  };
  getViewBySelector = async () => {
    //console.log(`getViews state= ${this.props.views_selector}`);
    this.setState({
      ViewGetStatus: RequestStatus.Getting
    });
    try {
      console.log(`view try et ${this.props.plan_selector}`);
      console.log(`${this.props.plan_selector}`);
      console.log(`${this.props.view_selector}`);
      const view = await this.props.httpClient.get(`/api/v1/view/${this.props.view_selector}`);
      console.log(`view = `);
      /* if (view.deviceFeature[view.deviceFeature.length - 1].length > 0) {
        console.log(`view = `);
        view.deviceFeature.push([]);
      }
      if (!view.triggers) {
        console.log(`view = `);
        view.triggers = [];
      } */
      console.log(` aaaaaaaaaaaaaaaaaaa view.pictureName = ${view.pictureName}`);
      console.log(`aaaaaaaaaaaaaaaaaaaa view.name = ${view.name}`);
      console.log(`aaaaaaaaaaaaaaaaaaaa view.name = ${view.plan_id}`);
      /* const variables = [];
      view.deviceFeature.forEach(actionGroup => {
        console.log(`view = `);
        variables.push(actionGroup.map(action => []));
      }); */
      this.setState({
        view,
        ViewGetStatus: RequestStatus.Success
      });
    } catch (e) {
      console.log(`view catch`);
      this.setState({
        ViewGetStatus: RequestStatus.Error
      });
    }
  };
  getViews = async () => {
    console.log(`pppppppppppppp getViews views=`);
    this.setState({
      GetStatus: RequestStatus.Getting
    });
    console.log(`2344pppppppppppppp getViews views=`);
    try {
      
      console.log(`ppppppppppppppsffsgvsgvq getViews views=`);
      const orderDir = this.getViewsOrderDir || 'asc';
      const params = {
        order_dir: orderDir
      };
      
      console.log(params);
      if (this.viewSearch && this.viewSearch.length) {
        params.search = this.viewSearch;
      }
      console.log(params);
      const views = await this.props.httpClient.get('/api/v1/view' , params);
      console.log(views);
      console.log(`fin getViews views=`);
      this.setState({
        views,
        GetStatus: RequestStatus.Success
      });
    } catch (e) {
      this.setState({
        GetStatus: RequestStatus.Error
      });
    }
  };
  saveView = async () => {
    this.setState({ saving: true, error: false });
    try {
      await this.props.httpClient.patch(`/api/v1/view/edit-view/${this.props.view_selector}`, this.state.view);
    } catch (e) {
      console.log(e);
      this.setState({ error: true });
    }
    this.setState({ saving: false });
  };
  addAction = columnIndex => {
    this.setState(prevState => {
      let newState = update(prevState, {
        view: {
          actions: {
            [columnIndex]: {
              $push: [
                {
                  type: null
                }
              ]
            }
          }
        },
        variables: {
          [columnIndex]: {
            $push: [[]]
          }
        }
      });
      if (newState.view.actions[columnIndex].length === 0) {
        newState = update(newState, {
          view: {
            actions: {
              $push: [[]]
            }
          },
          variables: {
            $push: [[]]
          }
        });
      }
      return newState;
    });
  };
  deleteAction = (columnIndex, rowIndex) => {
    this.setState(prevState => {
      let newState = update(prevState, {
        view: {
          actions: {
            [columnIndex]: {
              $splice: [[rowIndex, 1]]
            }
          }
        },
        variables: {
          [columnIndex]: {
            $splice: [[rowIndex, 1]]
          }
        }
      });
      // if necessary, we remove the last action group
      if (newState.view.actions.length >= 2) {
        if (
          newState.view.actions[newState.view.actions.length - 1].length === 0 &&
          newState.view.actions[newState.view.actions.length - 2].length === 0
        ) {
          newState = update(newState, {
            view: {
              actions: {
                $splice: [[newState.view.actions.length - 1, 1]]
              }
            },
            variables: {
              $splice: [[newState.view.actions.length - 1, 1]]
            }
          });
        }
      }

      return newState;
    });
  };
  updateActionProperty = (columnIndex, rowIndex, property, value) => {
    this.setState(prevState => {
      const newState = update(prevState, {
        view: {
          actions: {
            [columnIndex]: {
              [rowIndex]: {
                [property]: {
                  $set: value
                }
              }
            }
          }
        }
      });
      return newState;
    });
  };
  highlighCurrentlyExecutedAction = ({ columnIndex, rowIndex }) => {
    this.setState({
      highLightedActions: {
        [`${columnIndex}:${rowIndex}`]: true
      }
    });
  };
  removeHighlighAction = ({ columnIndex, rowIndex }) => {
    setTimeout(() => {
      this.setState({
        highLightedActions: {
          [`${columnIndex}:${rowIndex}`]: false
        }
      });
    }, 500);
  };
  addTrigger = () => {
    this.setState(prevState => {
      const newState = update(prevState, {
        view: {
          triggers: {
            $push: [
              {
                type: null
              }
            ]
          }
        }
      });
      return newState;
    });
  };
  deleteTrigger = index => {
    this.setState(prevState => {
      const newState = update(prevState, {
        view: {
          triggers: {
            $splice: [[index, 1]]
          }
        }
      });
      return newState;
    });
  };
  updateTriggerProperty = (index, property, value) => {
    this.setState(prevState => {
      const newState = update(prevState, {
        view: {
          triggers: {
            [index]: {
              [property]: {
                $set: value
              }
            }
          }
        }
      });
      return newState;
    });
  };

  setVariables = (columnIndex, index, variables) => {
    this.setState(prevState => {
      const newState = update(prevState, {
        variables: {
          [columnIndex]: {
            [index]: {
              $set: variables
            }
          }
        }
      });
      return newState;
    });
  };

  constructor(props) {
    super(props);
    
    this.state = {
      view: null,
      plan: null,
/*       variables: {} */
    };
  }
  

  componentDidMount() {
    this.getPlanBySelector();
    this.getViewBySelector();
    this.getViews();

    
/*     this.props.session.dispatcher.addListener('view.executing-action', payload =>
      this.highlighCurrentlyExecutedAction(payload)
    );
    this.props.session.dispatcher.addListener('view.finished-executing-action', payload =>
      this.removeHighlighAction(payload)
    ); */
  }

  

  



  render(props, {plan, error, view, views}) {
    
    const loading = props.PlanGetStatus === RequestStatus.Getting;
    return (
      plan && (
        <ViewPage
         {...props}
          view={view}
          views={views}
          plan={plan}
          /* {console.log({view})} */
         /*  startView={this.startView}
          deleteView={this.deleteView}
          saveView={this.saveView}
          updateActionProperty={this.updateActionProperty}
          updateTriggerProperty={this.updateTriggerProperty}
          addAction={this.addAction}
          deleteAction={this.deleteAction}
          addTrigger={this.addTrigger}
          deleteTrigger={this.deleteTrigger}
          saving={saving}
          error={error}
          variables={variables}
          setVariables={this.setVariables} */
          loading={loading}
        />
      )
    );
    
  }
}

export default View;
