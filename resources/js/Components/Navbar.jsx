import { Link } from "@inertiajs/react";

export default function NavBar() {
  return (
    <nav className="navbar navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand">
          <button type="button" className="btn-toggle-offcanvas">
            <i className="fa fa-bars" />
          </button>
          <button type="button" className="btn-toggle-fullwidth">
            <i className="fa fa-bars" />
          </button>
          <a href="/">ICONIC</a>
        </div>
        <div className="navbar-right">
          <form id="navbar-search" className="navbar-form search-form">
            <input
              defaultValue=""
              className="form-control"
              placeholder="Search here..."
              type="text"
            />
            <button type="button" className="btn btn-default">
              <i className="icon-magnifier" />
            </button>
          </form>
          <div id="navbar-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a
                  href="javascript:void(0);"
                  className="dropdown-toggle icon-menu"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-bell" />
                  <span className="notification-dot" />
                </a>
                <ul className="dropdown-menu notifications">
                  <li className="header">
                    <strong>You have 4 new Notifications</strong>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <div className="media">
                        <div className="media-left">
                          <i className="icon-info text-warning" />
                        </div>
                        <div className="media-body">
                          <p className="text">
                            Campaign <strong>Holiday Sale</strong> is nearly reaching
                            the budget limit.
                          </p>
                          <span className="timestamp">10:00 AM Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* Add more notification items here */}
                  <li className="footer">
                    <a href="javascript:void(0);" className="more">
                      See all notifications
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <Link method="post" href={route('logout')} className="icon-menu">
                  <i className="fa fa-power-off" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
