import { Component } from 'preact';/* 
import style from './style.css'; */

class ViewCard extends Component {
  startScene = () => {
    this.props.startScene(this.props.scene.selector);
  };

  render(props, {}) {
    return (
      <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
            <div class="btn-group show" role="group">
              <button id="btnGroupVerticalDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              {props.view.name}
              </button>
            </div>
      </div>
      
          
    );
  }
}

export default ViewCard;
