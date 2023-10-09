import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import CompanyProfileForm from './Company/CompanyProfileForm';
import ISOCertificates from './Company/ISOCertificates';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AppLayout>
        {/* <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Profile</h2>}
        > */}
            <Head title="Profile" />
            <div id="main-content">
  <div className="container-fluid">
    <div className="block-header">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h2>User Profile</h2>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">
                <i className="fa fa-dashboard" />
              </a>
            </li>
            <li className="breadcrumb-item">Extra</li>
            <li className="breadcrumb-item active">User Profile</li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="d-flex flex-row-reverse">
            <div className="page_action">
              <button type="button" className="btn btn-primary">
                <i className="fa fa-download" /> Download report
              </button>
              <button type="button" className="btn btn-secondary">
                <i className="fa fa-send" /> Send report
              </button>
            </div>
            <div className="p-2 d-flex"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="row clearfix">
      <div className="col-lg-12">
        <div className="card">
          <div className="body">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#Settings"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#Company"
                >
                  Company
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#billings">
                  Billings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#preferences">
                  Preferences
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane active" id="Settings">
              <div className="body">
                <h6>Profile Photo</h6>
                <div className="media">
                  <div className="media-left m-r-15">
                    <img
                      src="assets/images/user.png"
                      className="user-photo media-object"
                      alt="User"
                    />
                  </div>
                  <div className="media-body">
                    <p>
                      Upload your photo.
                      <br /> <em>Image should be at least 140px x 140px</em>
                    </p>
                    <button
                      type="button"
                      className="btn btn-default"
                      id="btn-upload-photo"
                    >
                      Upload Photo
                    </button>
                    <input type="file" id="filePhoto" className="sr-only" />
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="row">
              <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                        </div>
                        </div>
              <div className="body">
                <div className="row clearfix">
                    <UpdatePasswordForm className="max-w-xl" />
                  </div>
              </div>
              <div className="body">
                <div className="row">
                <DeleteUserForm className="max-w-xl" />
                </div>
              </div>
            </div>

            <div className="tab-pane" id="Company">
            <CompanyProfileForm/>
            <ISOCertificates/>
            </div>

            <div className="tab-pane" id="billings">
              <div className="body">
                <h6>Payment Method</h6>
                <div className="payment-info">
                  <h3 className="payment-name">
                    <i className="fa fa-paypal" /> PayPal ****2222
                  </h3>
                  <span>Next billing charged $29</span>
                  <br />
                  <em className="text-muted">Autopay on May 12, 2018</em>
                  <a href="javascript:void(0);" className="edit-payment-info">
                    Edit Payment Info
                  </a>
                </div>
                <p className="margin-top-30">
                  <a href="javascript:void(0);">
                    <i className="fa fa-plus-circle" /> Add Payment Info
                  </a>
                </p>
              </div>
              <div className="body">
                <h6>Billing History</h6>
                <table className="table billing-history">
                  <thead className="sr-only">
                    <tr>
                      <th>Plan</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h3 className="billing-title">
                          Basic Plan{" "}
                          <span className="invoice-number">#LA35628</span>
                        </h3>
                        <span className="text-muted">
                          Charged at April 17, 2018
                        </span>
                      </td>
                      <td className="amount">$29</td>
                      <td className="action">
                        <a href="javascript:void(0);">View</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3 className="billing-title">
                          Pro Plan{" "}
                          <span className="invoice-number">#LA3599</span>
                        </h3>
                        <span className="text-muted">
                          Charged at March 18, 2018
                        </span>
                      </td>
                      <td className="amount">$59</td>
                      <td className="action">
                        <a href="javascript:void(0);">View</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3 className="billing-title">
                          Platinum Plan{" "}
                          <span className="invoice-number">#LA1245</span>
                        </h3>
                        <span className="text-muted">
                          Charged at Feb 02, 2018
                        </span>
                      </td>
                      <td className="amount">$89</td>
                      <td className="action">
                        <a href="javascript:void(0);">View</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button type="button" className="btn btn-primary">
                  Update
                </button>
                <button type="button" className="btn btn-default">
                  Cancel
                </button>
              </div>
            </div>
            <div className="tab-pane" id="preferences">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12">
                  <div className="body">
                    <h6>Your Login Sessions</h6>
                    <ul className="list-unstyled list-login-session">
                      <li>
                        <div className="login-session">
                          <i className="fa fa-laptop device-icon" />
                          <div className="login-info">
                            <h3 className="login-title">
                              Mac - New York, United States
                            </h3>
                            <span className="login-detail">
                              Chrome -{" "}
                              <span className="text-success">Active Now</span>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="login-session">
                          <i className="fa fa-desktop device-icon" />
                          <div className="login-info">
                            <h3 className="login-title">
                              Windows 10 - New York, United States
                            </h3>
                            <span className="login-detail">
                              Firefox - about an hour ago
                            </span>
                          </div>
                          <button
                            type="button"
                            className="btn btn-link btn-logout"
                            data-container="body"
                            data-toggle="tooltip"
                            title="Close this login session"
                          >
                            <i className="fa fa-times-circle text-danger" />
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="login-session">
                          <i className="fa fa-mobile fa-fw device-icon" />
                          <div className="login-info">
                            <h3 className="login-title">
                              Android - New York, United States
                            </h3>
                            <span className="login-detail">
                              Android Browser - yesterday
                            </span>
                          </div>
                          <button
                            type="button"
                            className="btn btn-link btn-logout"
                            data-container="body"
                            data-toggle="tooltip"
                            title="Close this login session"
                          >
                            <i className="fa fa-times-circle text-danger" />
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="body">
                    <h6>Connected Social Media</h6>
                    <ul className="list-unstyled list-connected-app">
                      <li>
                        <div className="connected-app">
                          <i className="fa fa-facebook app-icon" />
                          <div className="connection-info">
                            <h3 className="app-title">FaceBook</h3>
                            <span className="actions">
                              <a href="javascript:void(0);">View Permissions</a>{" "}
                              <a
                                href="javascript:void(0);"
                                className="text-danger"
                              >
                                Revoke Access
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="connected-app">
                          <i className="fa fa-twitter app-icon" />
                          <div className="connection-info">
                            <h3 className="app-title">Twitter</h3>
                            <span className="actions">
                              <a href="javascript:void(0);">View Permissions</a>{" "}
                              <a
                                href="javascript:void(0);"
                                className="text-danger"
                              >
                                Revoke Access
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="connected-app">
                          <i className="fa fa-instagram app-icon" />
                          <div className="connection-info">
                            <h3 className="app-title">Instagram</h3>
                            <span className="actions">
                              <a href="javascript:void(0);">View Permissions</a>{" "}
                              <a
                                href="javascript:void(0);"
                                className="text-danger"
                              >
                                Revoke Access
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="connected-app">
                          <i className="fa fa-linkedin app-icon" />
                          <div className="connection-info">
                            <h3 className="app-title">Linkedin</h3>
                            <span className="actions">
                              <a href="javascript:void(0);">View Permissions</a>{" "}
                              <a
                                href="javascript:void(0);"
                                className="text-danger"
                              >
                                Revoke Access
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="connected-app">
                          <i className="fa fa-vimeo app-icon" />
                          <div className="connection-info">
                            <h3 className="app-title">Vimeo</h3>
                            <span className="actions">
                              <a href="javascript:void(0);">View Permissions</a>{" "}
                              <a
                                href="javascript:void(0);"
                                className="text-danger"
                              >
                                Revoke Access
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
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

            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div> */}
        {/* </AuthenticatedLayout> */}
        </AppLayout>
    );
}
