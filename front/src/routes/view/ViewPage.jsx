import { Text } from 'preact-i18n';
import ViewCards from './ViewCards';

const ViewPage = ({ children, ...props }) => (
  <div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">
              <Text id="dashboard.title" />
            </h1>
          </div>
          
           {props.views && <ViewCards {...props} />}
           {console.log(`props.views ${props.views}`)}
        </div>
      </div>
    </div>
  </div>
);

export default ViewPage;
