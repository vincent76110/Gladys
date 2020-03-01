import MapSetupPlansCard from './MapSetupPlansCard';

const MapSetupPlansCards = ({ children, ...props }) => (
  <div class="row row-cards">
    <MapSetupPlansCard {...props} />
  </div>
);

export default MapSetupPlansCards;
