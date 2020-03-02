import { Text } from 'preact-i18n';

const DashboardPage = ({ children, ...props }) => (
  <div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">
              <Text id="dashboard.title" />
            </h1>
          </div>
          <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
            <div class="btn-group show" role="group">
              <button id="btnGroupVerticalDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Plan 1
              </button>
              <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop">
                <a class="dropdown-item" >Dropdown link</a>
                <a class="dropdown-item" >Dropdown link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardPage;
