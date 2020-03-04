/* import { Text } from 'preact-i18n'; */
import ViewCards from './ViewCards';


const ViewPage = ({ children, ...props}) => (
  <div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        <div class="container">
          <div class="page-header">
            <div class="row">
              <div class="col-md-auto">
                <h1 class="page-title" >
                {props.plan.name}
                
                </h1>

              </div>
            </div>
          </div>
          <div class="row align-items-start"> {/* justify-content-md-center"> */}
            <div class="col-left-auto align-self-start">
              {props.views && <ViewCards {...props} />}
            </div>
            <div class="col align-self-center">
              <img src={props.plan.picture} />
            </div>
            <div class="col-2"> 
            {"Coucou"}
          </div>  
          </div>
          
          
           
        </div>
      </div>
    </div>
  </div>
);

export default ViewPage;
