import { Text } from 'preact-i18n';
import { Link } from 'preact-router/match';

const DashboardPage = ({ children, ...props }) => (
  <div class="page">
    <div class="page-main">
      <div class="my-3 my-md-5">
        <div class="container">
          <h1 class="page-title">
            <Text id="dashboard.title" />
          </h1>
          <div class="row">
            <div class="col-lg-3">
              <div>
                <div class="list-group list-group-transparent mb-0">
                  <Link
                    href="/dashboard/general"
                    activeClassName="active"
                    class="list-group-item list-group-item-action d-flex align-items-center"
                  >
                    <span class="icon mr-3">
                      <i class="fe fe-radio" />
                    </span>
                    <Text id="dashboard.generalTab" />
                  </Link>

                  <Link
                    href="/dashboard/plan"
                    activeClassName="active"
                    class="list-group-item list-group-item-action d-flex align-items-center"
                  >
                    <span class="icon mr-3">
                      <i class="fe fe-sliders" />
                    </span>
                    <Text id="dashboard.planTab" />
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-lg-9">{children}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardPage;
