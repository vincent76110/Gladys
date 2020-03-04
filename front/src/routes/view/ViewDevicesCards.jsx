import ViewDevicesCard from './ViewCard';

const ViewDevicesCards = ({ children, ...props }) => (
  
  <div class="list-group">
    {console.log(`Vue ViewCards ${props}`)}
    {console.log(props)}
    {props.views.map(view => (
      <ViewDevicesCard {...props} view={view}  />
    ))}
    {/* {console.log(`props.views ${props.views[0].name}`)} */}
  </div>
);

export default ViewDevicesCards;
