import { Component } from 'preact';
import { Text } from 'preact-i18n';
import { connect } from 'unistore/preact';
import actions from '../../../actions/dashboard/edit-boxes/editDevicesInRoom';
import BaseEditBox from '../baseEditBox';

const updateBoxRoom = (updateBoxRoomFunc, x, y) => e => {
  updateBoxRoomFunc(x, y, e.target.value);
};

const EditDevicesInRoom = ({ children, ...props }) => (
  <BaseEditBox {...props} titleKey="dashboard.boxTitle.devices-in-room">
    <div class="form-group">
      <label>
        <Text id="dashboard.boxes.devicesInRoom.editRoomLabel" />
      </label>
      <select onChange={updateBoxRoom(props.updateBoxRoom, props.x, props.y)} class="form-control">
        <option value="">
          <Text id="global.emptySelectOption" />
        </option>
        {props.rooms &&
          props.rooms.map(room => (
            <option selected={room.selector === props.box.room} value={room.selector}>
              {room.name}
            </option>
          ))}
      </select>
    </div>
  </BaseEditBox>
);

@connect('rooms', actions)
class EditDeviceInRoomComponent extends Component {
  componentDidMount() {
    this.props.getRooms();
  }

  render(props, {}) {
    return <EditDevicesInRoom {...props} />;
  }
}

export default EditDeviceInRoomComponent;
