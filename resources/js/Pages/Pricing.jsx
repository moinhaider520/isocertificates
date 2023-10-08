import Header from "@/Components/Common/Header";
import Leftbar from "@/Components/Common/Leftbar";
import Navbar from "@/Components/Common/Navbar";
import Rightbar from "@/Components/Common/Rightbar";
import { Head } from "@inertiajs/react";

export default function Pricing(){
    return(
        <>
        <Head title="Pricing"/>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content">
  <div className="container-fluid">
  <Header headerText="Pricing" mainNavigate="App" currentPage="Pricing"/>
    <div className="row clearfix">
      <div className="col-lg-3 cool-md-6 col-sm-12">
        <div className="card">
          <ul className="pricing body">
            <li>
              <big>Start</big>
            </li>
            <li>Responsive Design</li>
            <li>Color Customization</li>
            <li>HTML5 &amp; CSS3</li>
            <li>Styled elements</li>
            <li>
              <h3>$199</h3>
              <span>per month</span>
            </li>
            <li>
              <button className="btn btn-outline-secondary">Join Now</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 cool-md-6 col-sm-12">
        <div className="card">
          <ul className="pricing body active">
            <li>
              <big>Good</big>
            </li>
            <li>Responsive Design</li>
            <li>Color Customization</li>
            <li>HTML5 &amp; CSS3</li>
            <li>Styled elements</li>
            <li>
              <h3>$299</h3>
              <span>per month</span>
            </li>
            <li>
              <button className="btn btn-primary ">Join Now</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 cool-md-6 col-sm-12">
        <div className="card">
          <ul className="pricing body">
            <li>
              <big>Ultima</big>
            </li>
            <li>Responsive Design</li>
            <li>Color Customization</li>
            <li>HTML5 &amp; CSS3</li>
            <li>Styled elements</li>
            <li>
              <h3>$399</h3>
              <span>per month</span>
            </li>
            <li>
              <button className="btn btn-outline-secondary">Join Now</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 cool-md-6 col-sm-12">
        <div className="card">
          <ul className="pricing body">
            <li>
              <big>Vip</big>
            </li>
            <li>Responsive Design</li>
            <li>Color Customization</li>
            <li>HTML5 &amp; CSS3</li>
            <li>Styled elements</li>
            <li>
              <h3>$799</h3>
              <span>per month</span>
            </li>
            <li>
              <button className="btn btn-outline-secondary">Join Now</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row clearfix">
      <div className="col-12">
        <h5>Pricing Table Option 2</h5>
        <hr />
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="card pricing2">
          <div className="body">
            <div className="pricing-plan">
              <img
                src="assets/images/paper-plane.png"
                alt=""
                className="pricing-img"
              />
              <h2 className="pricing-header">Start</h2>
              <ul className="pricing-features">
                <li>Responsive Design</li>
                <li>Color Customization</li>
                <li>HTML5 &amp; CSS3</li>
                <li>Styled elements</li>
              </ul>
              <span className="pricing-price">Free</span>
              <a href="javascript:void(0);" className="btn btn-outline-primary">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="card pricing2">
          <div className="body">
            <div className="pricing-plan">
              <img
                src="assets/images/plane.png"
                alt=""
                className="pricing-img"
              />
              <h2 className="pricing-header">Good</h2>
              <ul className="pricing-features">
                <li>Responsive Design</li>
                <li>Color Customization</li>
                <li>HTML5 &amp; CSS3</li>
                <li>Styled elements</li>
              </ul>
              <span className="pricing-price">$149</span>
              <a href="javascript:void(0);" className="btn btn-primary">
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="card pricing2">
          <div className="body">
            <div className="pricing-plan">
              <img
                src="assets/images/space-ship.png"
                alt=""
                className="pricing-img"
              />
              <h2 className="pricing-header">Ultima</h2>
              <ul className="pricing-features">
                <li>Responsive Design</li>
                <li>Color Customization</li>
                <li>HTML5 &amp; CSS3</li>
                <li>Styled elements</li>
              </ul>
              <span className="pricing-price">$349</span>
              <a href="javascript:void(0);" className="btn btn-outline-primary">
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row clearfix">
      <div className="col-12">
        <h5>Pricing Table Option 3</h5>
        <hr />
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="card pricing3">
          <div className="body">
            <div className="pricing-option">
              <i className="fa fa-laptop" />
              <h5>Ui design</h5>
              <hr />
              <div className="m-t-30 m-b-30">
                <h6>Files</h6>
                <p>
                  .PSD .AI .PNG .SVG
                  <br />
                  Licensed for 1 project
                </p>
              </div>
              <div className="price">
                <span className="price">
                  149 <b>$</b>
                </span>
              </div>
              <a
                href="javascript:void(0);"
                className="btn btn-outline-secondary"
              >
                Purchase now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="card pricing3">
          <div className="body">
            <div className="pricing-option">
              <i className="fa fa-user" />
              <h5>Ux design</h5>
              <hr />
              <div className="m-t-30 m-b-30">
                <h6>Files</h6>
                <p>
                  .PSD .AI .PNG .SVG
                  <br />
                  Licensed for 5 project
                </p>
              </div>
              <div className="price">
                <span className="price">
                  249 <b>$</b>
                </span>
              </div>
              <a
                href="javascript:void(0);"
                className="btn btn-outline-secondary"
              >
                Purchase now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12">
        <div className="card pricing3">
          <div className="body">
            <div className="pricing-option">
              <i className="fa fa-print" />
              <h5>Print design</h5>
              <hr />
              <div className="m-t-30 m-b-30">
                <h6>Files</h6>
                <p>
                  .PSD .AI .PNG .SVG
                  <br />
                  Licensed for 1 project
                </p>
              </div>
              <div className="price">
                <span className="price">
                  349 <b>$</b>
                </span>
              </div>
              <a
                href="javascript:void(0);"
                className="btn btn-outline-secondary"
              >
                Purchase now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}