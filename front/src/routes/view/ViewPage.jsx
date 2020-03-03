/* import { Text } from 'preact-i18n'; */
import ViewCards from './ViewCards';

const ViewPage = ({ children, ...props }) => (
  <div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">
             {/*  {props.plans.name} */}
              {props.views && <ViewCards {...props} />}
            </h1>
          </div>
           
        </div>
      </div>
    </div>
  </div>
);

export default ViewPage;
