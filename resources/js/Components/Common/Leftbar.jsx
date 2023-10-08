import React from "react";
import { Dropdown, Tabs, Tab } from "react-bootstrap";
import userImage from "../../../assets/images/user.png";
import Mainmenu from "./Mainmenu";
import { Link } from "@inertiajs/react";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a href="javascript:void(0);" className="dropdown-toggle user-name" data-toggle="dropdown">
    <strong>Pamela Petrus</strong>
  </a>
));

function Leftbar({ navigation }) {
  return (
    <div className="sidebar">
      <div className="sidebar-scroll">
        <div className="user-account">
          <img src={userImage} className="rounded-circle user-photo" alt="User Profile Picture" />
          <Dropdown>
            <span>Welcome,</span>
            <Dropdown.Toggle className="dropdown-toggle user-name" id="dropdown-basic">
              Pamela Petrus
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right account">
              <Dropdown.Item>
                <Link href={route('profile')}>
                <i className="icon-user"></i>My Profile
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href={route('inbox')}>
                <i className="icon-envelope-open"></i>Messages
                </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                <Link href={route('bloglist')}>
                <i className="icon-envelope-open"></i>Blogs
                </Link>
                </Dropdown.Item>
              <Dropdown.Item>
              <Link href={route('/')}>
              <i className="icon-power"></i>Logout
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <hr />
          <ul className="row list-unstyled">
            <li className="col-4">
              <small>Sales</small>
              <h6>561</h6>
            </li>
            <li className="col-4">
              <small>Order</small>
              <h6>920</h6>
            </li>
            <li className="col-4">
              <small>Revenue</small>
              <h6>$23B</h6>
            </li>
          </ul>
        </div>
        <Mainmenu/>
        {/* <Tabs defaultActiveKey="menu" transition={false} id="noanim-tab-example">
          <Tab eventKey="menu" title="Menu">
            <Mainmenu/>
          </Tab>
          <Tab eventKey="profile" title={<i className="icon-book-open"></i>}></Tab>
          <Tab eventKey="setting" title={<i className="icon-settings"></i>}></Tab>
          <Tab eventKey="help" title={<i className="icon-question"></i>}></Tab>
        </Tabs> */}
      </div>
    </div>
  );
}

export default Leftbar;
