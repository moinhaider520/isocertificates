import { Link } from "@inertiajs/react";
import React, { useState } from "react";

function Navbar() {
  const [leftbar, setLeftbar] = useState(false);
  const [bodyClass, setBodyClass] = useState('');
  const [toggle,setToggle] = useState(false);
  const toggleLeftbar = () => {
    setLeftbar(!leftbar);
    document.body.classList.toggle('layout-fullwidth', !leftbar);
  };

  const toggleBodyClass = () => {
    if (bodyClass === '') {
      setBodyClass('some-class'); // Add your desired class name here
    } else {
      setBodyClass('');
    }
  };

  return (
    <nav className="navbar navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand">
          <button
            type="button"
            className="btn-toggle-offcanvas"
            onClick={() => {
              setLeftbar(false);
              document.body.classList.remove('layout-fullwidth');
              toggleBodyClass();
            }}
          >
            <i className="fa fa-bars"></i>
          </button>
          <button
            type="button"
            className="btn-toggle-fullwidth mr-1"
            onClick={()=>{
                toggleLeftbar();
                toggleBodyClass();
                }
            }
            
          >
            <i className={!leftbar ? 'fa fa-bars' : 'fa fa-arrow-right'}></i>
          </button>
          <a href="index.html">ICONIC</a>
        </div>

        <div className="navbar-right">
          <form id="navbar-search" className="navbar-form search-form">
            <input
              className="form-control"
              placeholder="Search here..."
              type="text"
            />
            <button type="button" className="btn btn-default">
              <i className="icon-magnifier"></i>
            </button>
          </form>

          <div id="navbar-menu">
            <ul className="nav navbar-nav">
              <li className={toggle==false?"dropdown":"dropdown show"}>
                <a
                  nohref
                  onClick={()=>setToggle(!toggle)}
                  className="dropdown-toggle icon-menu"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-bell"></i>
                  <span className="notification-dot"></span>
                </a>
                <ul className={toggle==false?"dropdown-menu notifications":"dropdown-menu notifications show"}>
                  <li className="header">
                    <strong>You have 4 new Notifications</strong>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <div className="media-left">
                          <i className="icon-info text-warning"></i>
                        </div>
                        <div className="media-body">
                          <p className="text">
                            Campaign <strong>Holiday Sale</strong> is nearly
                            reach budget limit.
                          </p>
                          <span className="timestamp">10:00 AM Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <div className="media-left">
                          <i className="icon-like text-success"></i>
                        </div>
                        <div className="media-body">
                          <p className="text">
                            Your New Campaign <strong>Holiday Sale</strong> is
                            approved.
                          </p>
                          <span className="timestamp">11:30 AM Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <div className="media-left">
                          <i className="icon-pie-chart text-info"></i>
                        </div>
                        <div className="media-body">
                          <p className="text">
                            Website visits from Twitter is 27% higher than last
                            week.
                          </p>
                          <span className="timestamp">04:00 PM Today</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <div className="media-left">
                          <i className="icon-info text-danger"></i>
                        </div>
                        <div className="media-body">
                          <p className="text">
                            Error on website analytics configurations
                          </p>
                          <span className="timestamp">Yesterday</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="footer">
                    <Link href={route('inbox')} className="more">
                      See all notifications
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={route('/')} className="icon-menu">
                  <i className="fa fa-power-off"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
