import ViewCard from './ViewCard';

const ViewCards = ({ children, ...props }) => (
  <div class="list-group">
    {props.views.map(view => (
      <ViewCard {...props} view={view}  />
    ))}
    {console.log(`props.views ${props.views[0].name}`)}
  </div>
);

export default ViewCards;
