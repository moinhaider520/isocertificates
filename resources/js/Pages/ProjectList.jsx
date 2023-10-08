import Header from "@/Components/Common/Header";
import Leftbar from "@/Components/Common/Leftbar";
import Navbar from "@/Components/Common/Navbar";
import Rightbar from "@/Components/Common/Rightbar";
import { Head } from "@inertiajs/react";

export default function ProjectList(){
    return(
        <>
        <Head title="Project List"/>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content">
  <div className="container-fluid">
  <Header headerText="Project List" mainNavigate="App" currentPage="Project List"/>
    <div className="row clearfix">
      <div className="col-lg-12 col-md-12">
        <div className="card">
          <div className="body project_report">
            <div className="table-responsive">
              <table className="table mb-0 table-hover">
                <thead className="thead-light">
                  <tr>
                    <th>Status</th>
                    <th>Project</th>
                    <th>Prograss</th>
                    <th>Team</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="badge badge-success">Active</span>
                    </td>
                    <td className="project-title">
                      <h6>
                        <a href="javascript:void(0);">InfiniO 4.1</a>
                      </h6>
                      <small>Created 14.Mar.2018</small>
                    </td>
                    <td>
                      {/* <div className="progress progress-xs">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={48}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "48%" }}
                        />
                      </div> */}
                      <small>Completion with: 48%</small>
                    </td>
                    <td>
                      <ul className="list-unstyled team-info">
                        <li>
                          <img
                            src="assets/images/xs/avatar1.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/xs/avatar2.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/xs/avatar3.jpg"
                            alt="Avatar"
                          />
                        </li>
                      </ul>
                    </td>
                    <td className="project-actions">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-secondary"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-secondary"
                      >
                        <i className="fa fa-pencil" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="badge badge-success">Active</span>
                    </td>
                    <td className="project-title">
                      <h6>
                        <a href="javascript:void(0);">
                          Many desktop publishing packages and web
                        </a>
                      </h6>
                      <small>Created 18.Mar.2018</small>
                    </td>
                    <td>
                      {/* <div className="progress progress-xs">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={78}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "78%" }}
                        />
                      </div> */}
                      <small>Completion with: 78%</small>
                    </td>
                    <td>
                      <ul className="list-unstyled team-info">
                        <li>
                          <img
                            src="assets/images/xs/avatar10.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/xs/avatar7.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/xs/avatar2.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/xs/avatar5.jpg"
                            alt="Avatar"
                          />
                        </li>
                      </ul>
                    </td>
                    <td className="project-actions">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-secondary"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-secondary"
                      >
                        <i className="fa fa-pencil" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="badge badge-default">InActive</span>
                    </td>
                    <td className="project-title">
                      <h6>
                        <a href="javascript:void(0);">
                          iNext - One Page Responsive Template
                        </a>
                      </h6>
                      <small>Created 14.Mar.2018</small>
                    </td>
                    <td>
                      {/* <div className="progress progress-xs">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={29}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "29%" }}
                        />
                      </div> */}
                      <small>Completion with: 29%</small>
                    </td>
                    <td>
                      <ul className="list-unstyled team-info">
                        <li>
                          <img
                            src="assets/images/xs/avatar2.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/xs/avatar3.jpg"
                            alt="Avatar"
                          />
                        </li>
                      </ul>
                    </td>
                    <td className="project-actions">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-secondary"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-secondary"
                      >
                        <i className="fa fa-pencil" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="badge badge-success">Active</span>
                    </td>
                    <td className="project-title">
                      <h6>
                        <a href="javascript:void(0);">
                          Oakleaf Admin - Bootstrap html5 with SASS
                        </a>
                      </h6>
                      <small>Created 18.Mar.2018</small>
                    </td>
                    <td>
                      {/* <div className="progress progress-xs">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={13}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "13%" }}
                        />
                      </div> */}
                      <small>Completion with: 13%</small>
                    </td>
                    <td>
                      <ul className="list-unstyled team-info">
                        <li>
                          <img
                            src="assets/images/xs/avatar7.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/xs/avatar1.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/xs/avatar3.jpg"
                            alt="Avatar"
                          />
                        </li>
                      </ul>
                    </td>
                    <td className="project-actions">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-secondary"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-secondary"
                      >
                        <i className="fa fa-pencil" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="badge badge-success">Active</span>
                    </td>
                    <td className="project-title">
                      <h6>
                        <a href="javascript:void(0);">InfiniO 4.1</a>
                      </h6>
                      <small>Created 14.Mar.2018</small>
                    </td>
                    <td>
                      {/* <div className="progress progress-xs">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={48}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "48%" }}
                        />
                      </div> */}
                      <small>Completion with: 48%</small>
                    </td>
                    <td>
                      <ul className="list-unstyled team-info">
                        <li>
                          <img
                            src="assets/images/xs/avatar1.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/xs/avatar2.jpg"
                            alt="Avatar"
                          />
                        </li>
                        <li>
                          <img
                            src="assets/images/xs/avatar3.jpg"
                            alt="Avatar"
                          />
                        </li>
                      </ul>
                    </td>
                    <td className="project-actions">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-secondary"
                      >
                        <i className="fa fa-eye" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outline-secondary"
                      >
                        <i className="fa fa-pencil" />
                      </a>
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

        </>
    )
}