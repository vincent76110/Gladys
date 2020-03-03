import ViewCard from './ViewCard';

const ViewCards = ({ children, ...props }) => (
  <div class="row row-cards">
    {props.views.map(view => (
      <ViewCard {...props} view={view}  />
    ))}
    ViewCards
  </div>
);

export default ViewCards;
