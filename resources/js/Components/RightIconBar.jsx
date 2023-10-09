import React from "react";

export default function RightIconBar() {
  return (
    <div className="right_icon_bar">
      <ul>
        <li>
          <a href="app-inbox.html">
            <i className="fa fa-envelope" />
          </a>
        </li>
        <li>
          <a href="app-chat.html">
            <i className="fa fa-comments" />
          </a>
        </li>
        <li>
          <a href="app-calendar.html">
            <i className="fa fa-calendar" />
          </a>
        </li>
        <li>
          <a href="file-dashboard.html">
            <i className="fa fa-folder" />
          </a>
        </li>
        <li>
          <a href="app-contact.html">
            <i className="fa fa-id-card" />
          </a>
        </li>
        <li>
          <a href="blog-list.html">
            <i className="fa fa-globe" />
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">
            <i className="fa fa-plus" />
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" className="right_icon_btn">
            <i className="fa fa-angle-right" />
          </a>
        </li>
      </ul>
    </div>
  );
}
