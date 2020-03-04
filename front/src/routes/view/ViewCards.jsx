import ViewCard from './ViewCard';

const ViewCards = ({ children, ...props }) => (
  <div class="card h-100">
    <div class="card-body p-2 text-center">
      <div class="list-group">
        {props.views.map(view => (
          <ViewCard {...props} view={view}  />
        ))}
        {/* {console.log(`props.views ${props.views[0].name}`)} */}
      </div>
    </div>
  </div>
);

export default ViewCards;
