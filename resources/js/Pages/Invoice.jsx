import Header from "@/Components/Common/Header";
import Leftbar from "@/Components/Common/Leftbar";
import Navbar from "@/Components/Common/Navbar";
import Rightbar from "@/Components/Common/Rightbar";
import { Head } from "@inertiajs/react";

export default function Invoice(){
    return(
        <>
        <Head title="Invoice"/>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content">
  <div className="container-fluid">
  <Header headerText="Invoice" mainNavigate="App" currentPage="Invoice"/>
    <div className="row clearfix">
      <div className="col-lg-12">
        <div className="card">
          <div className="header">
            <h2>Single Invoice</h2>
            <ul className="header-dropdown">
              <li className="dropdown">
                <a
                  href="javascript:void(0);"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <ul className="dropdown-menu dropdown-menu-right">
                  <li>
                    <a href="javascript:void(0);">Print Invoices</a>
                  </li>
                  <li role="presentation" className="divider" />
                  <li>
                    <a href="javascript:void(0);">Export to XLS</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Export to CSV</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Export to XML</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="body">
            <h3>
              Invoice Details : <strong className="text-primary">#A0089</strong>
            </h3>
            <ul className="nav nav-tabs-new2">
              <li className="nav-item inlineblock">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#details"
                  aria-expanded="true"
                >
                  Details
                </a>
              </li>
              <li className="nav-item inlineblock">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#history"
                  aria-expanded="false"
                >
                  History
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane in active"
                id="details"
                aria-expanded="true"
              >
                <div className="row clearfix">
                  <div className="col-md-6 col-sm-6">
                    <address>
                      <strong>ThemeMakker Infotech LLP.</strong>
                      <br />
                      795 Folsom Ave, Suite 546
                      <br />
                      San Francisco, CA 54656
                      <br />
                      <abbr title="Phone">P:</abbr> (123) 456-34636
                    </address>
                  </div>
                  <div className="col-md-6 col-sm-6 text-right">
                    <p className="mb-0">
                      <strong>Order Date: </strong> Jun 15, 2019
                    </p>
                    <p className="mb-0">
                      <strong>Order Status: </strong>{" "}
                      <span className="badge badge-warning mb-0">Pending</span>
                    </p>
                    <p>
                      <strong>Order ID: </strong> #123456
                    </p>
                  </div>
                </div>
                <div className="row clearfix">
                  <div className="col-md-12">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className="thead-dark">
                          <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th className="hidden-sm-down">Description</th>
                            <th>Quantity</th>
                            <th className="hidden-sm-down">Unit Cost</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Simple Black Clock</td>
                            <td className="hidden-sm-down">
                              Lorem ipsum dolor sit amet.
                            </td>
                            <td>1</td>
                            <td className="hidden-sm-down">$380</td>
                            <td>$380</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Brone Candle</td>
                            <td className="hidden-sm-down">
                              There are many variations of passages of Lorem
                              Ipsum
                            </td>
                            <td>5</td>
                            <td className="hidden-sm-down">$50</td>
                            <td>$250</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Wood Simple Clock</td>
                            <td className="hidden-sm-down">
                              Lorem ipsum dolor sit amet.
                            </td>
                            <td>2</td>
                            <td className="hidden-sm-down">$500</td>
                            <td>$1000</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Unero Small Bag</td>
                            <td className="hidden-sm-down">
                              Contrary to popular belief, not simply random text
                            </td>
                            <td>3</td>
                            <td className="hidden-sm-down">$300</td>
                            <td>$900</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row clearfix">
                  <div className="col-md-6">
                    <h5>Note</h5>
                    <p>
                      Etsy doostang zoodles disqus groupon greplin oooj voxy
                      zoodles, weebly ning heekya handango imeem plugg dopplr
                      jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                    </p>
                  </div>
                  <div className="col-md-6 text-right">
                    <p className="mb-0">
                      <b>Sub-total:</b> 2930.00
                    </p>
                    <p className="mb-0">Discout: 12.9%</p>
                    <p className="mb-0">VAT: 12.9%</p>
                    <h3 className="mb-0 m-t-10">USD 2930.00</h3>
                  </div>
                  <div className="hidden-print col-md-12 text-right">
                    <hr />
                    <button className="btn btn-outline-secondary">
                      <i className="fa fa-print" />
                    </button>
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
              <div
                role="tabpanel"
                className="tab-pane"
                id="history"
                aria-expanded="false"
              >
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <address>
                      <strong>ThemeMakker Infotech LLP.</strong>
                      <br />
                      795 Folsom Ave, Suite 546
                      <br />
                      San Francisco, CA 54656
                      <br />
                      <abbr title="Phone">P:</abbr> (123) 456-34636
                    </address>
                  </div>
                  <div className="col-md-6 col-sm-6 text-right">
                    <p className="mb-0">
                      <strong>Order Date: </strong> Jun 15, 2019
                    </p>
                    <p className="mb-0">
                      <strong>Order Status: </strong>{" "}
                      <span className="badge bg-orange">Pending</span>
                    </p>
                    <p>
                      <strong>Order ID: </strong> #123456
                    </p>
                  </div>
                </div>
                <div className="mt-40" />
                <div className="row">
                  <div className="col-md-12">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Invoice Created</td>
                            <td>18 Dec, 2019</td>
                            <td>
                              <span className="badge badge-default">
                                Panding
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Invoice Sent</td>
                            <td>19 Dec, 2019</td>
                            <td>
                              <span className="badge badge-default">
                                Panding
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Invoice Paid</td>
                            <td>20 Dec, 2019</td>
                            <td>
                              <span className="badge badge-success">
                                Success
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
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