import React from "react";
import Image from "../../../assets/images/blog/05-img.jpg";
class InstagramPostCard extends React.Component {
  render() {
    return (
        <div className="card right-box">
                        <div className="header">
                            <h2>Instagram Post</h2>
                        </div>
                        <div className="body widget">
                            <ul className="list-unstyled instagram-plugin mb-0">
                                <li><a href="javascript:void(0);"><img src={Image} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={Image} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={Image} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={Image} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={Image} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={Image} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={Image} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={Image} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={Image} alt="image description"/></a></li>
                            </ul>
                        </div>
        </div>
    
    );
  }
}
export default InstagramPostCard
