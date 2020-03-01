import { Component } from 'preact';
import MapWorldPage from './MapWorldPage';

class Map extends Component {
  componentDidMount() {
    this.props.getUsersWithLocation();
    this.props.getHousesWithLocation();
  }

  render(props, {}) {
    return (<MapWorldPage users={props.usersWithLocation} houses={props.housesWithLocation} />);
  }
}

export default Map;
