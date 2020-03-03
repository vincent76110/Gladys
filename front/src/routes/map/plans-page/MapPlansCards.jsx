import MapPlansCard from './MapPlansCard';

const MapPlansCards = ({ children, ...props }) => (
  <div class="row row-cards">
    <MapPlansCard {...props} />
  </div>
);

export default MapPlansCards;
