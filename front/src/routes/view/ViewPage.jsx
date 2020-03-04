/* import { Text } from 'preact-i18n'; */


const ViewPage = ({ children, props, view }) => (
  console.log(`props.view.name=`),
  <div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">
            {console.log(`props.view.name= ${view.name}`)};
              {view.name}
            </h1>
          </div>
           
        </div>
      </div>
    </div>
  </div>
);

export default ViewPage;
