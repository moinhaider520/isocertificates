import { Link } from "@inertiajs/react";
import React, { useState } from "react";

const Rightbar = () => {
  const [rightbar, setRightbar] = useState(false);

  const toggleRightbar = () => {
    if (rightbar) {
      document.body.classList.remove('right_icon_toggle');
      setRightbar(false);
    } else {
      document.body.classList.add('right_icon_toggle');
      setRightbar(true);
    }
  };

  return (
    <div className="right_icon_bar">
      <ul>
        <li><Link href={route('inbox')}><i className="fa fa-envelope"></i></Link></li>
        <li><Link href={route('chat')}><i className="fa fa-comments"></i></Link></li>
        <li><Link href={route('calendar')}><i className="fa fa-calendar"></i></Link></li>
        <li><Link href={route('filedashboard')}><i className="fa fa-folder"></i></Link></li>
        <li><Link href={route('contact')}><i className="fa fa-id-card"></i></Link></li>
        <li><Link href={route('bloglist')}><i className="fa fa-globe"></i></Link></li>
        {/* <li><Link href="#"><i className="fa fa-plus"></i></Link></li> */}
        <li>
          <Link href="#" className="right_icon_btn" onClick={toggleRightbar}>
            <i className="fa fa-angle-right"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Rightbar;
