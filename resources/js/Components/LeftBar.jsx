import { Link } from '@inertiajs/react';
import User from '../../assets/images/user.png';
import { useState } from 'react';
export default function LeftBar(){
    const [toggleUserMenu,setUserMenu] = useState(false);
    return(
        <div id="left-sidebar" class="sidebar">
        <button type="button" class="btn-toggle-offcanvas"><i class="fa fa-arrow-left"></i></button>
        <div class="sidebar-scroll">
            <div class="user-account">
                <img src={User} class="rounded-circle user-photo" alt="User Profile Picture"/>
                <div class="dropdown show">
                    <span>Welcome,</span>
                    <a href="javascript:void(0);" class="dropdown-toggle user-name" data-toggle="dropdown"
                    onClick={()=>setUserMenu(!toggleUserMenu)}
                    ><strong>Pamela Petrus</strong></a>
                    <ul class={toggleUserMenu==false?"dropdown-menu dropdown-menu-right account":"dropdown-menu dropdown-menu-right account show"}
                    style={{position: "absolute",top: "100%",transform: "translate3d(-54px, 42px, 0px)",left: "0px",willChange: "transform"}}
                    >
                        <li><Link href={route('profile')}><i class="icon-user"></i>My Profile</Link></li>
                        <li><Link href={route('chat')}><i class="icon-envelope-open"></i>Messages</Link></li>
                        <li><a href="javascript:void(0);"><i class="icon-settings"></i>Settings</a></li>
                        <li class="divider"></li>
                        <li><Link href={route('/')}><i class="icon-power"></i>Logout</Link></li>
                    </ul>
                </div>
                <hr/>
                <ul class="row list-unstyled">
                    <li class="col-4">
                        <small>Sales</small>
                        <h6>561</h6>
                    </li>
                    <li class="col-4">
                        <small>Order</small>
                        <h6>920</h6>
                    </li>
                    <li class="col-4">
                        <small>Revenue</small>
                        <h6>$23B</h6>
                    </li>
                </ul>
            </div>
            <ul class="nav nav-tabs">
                <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#menu">Menu</a></li>
                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Chat"><i class="fa fa-book"></i></a></li>
                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#setting"><i class="fa fa-gear"></i></a></li>
                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#question"><i class="fa fa-info"></i></a></li>                
            </ul>
                
            <div class="tab-content padding-0">
                <div class="tab-pane active" id="menu">
                    <nav id="left-sidebar-nav" class="sidebar-nav">
                        <ul id="main-menu" class="metismenu li_animation_delay">
                            <li class="active">
                                <a href="#Dashboard" class="has-arrow"><i class="fa fa-dashboard"></i><span>Dashboard</span></a>
                                <ul>
                                    <li class="active"><Link href={route('main')}>Analytical</Link></li>
                                    <li><Link href={route('h-menu')}>Analytical H-Menu</Link></li>
                                    <li><Link href={route('iotdashboard')}>IoT Dashboard</Link></li>
                                    <li><Link href={route('demographic')}>Demographic</Link></li>
                                    <li><Link href={route('projectboard')}>Project Board</Link></li>
                                    {/* <li><a href="index7.html">Crypto Dashboard</a></li> */}
                                    <li><Link href={route('ecommerce')}>eCommerce</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#App" class="has-arrow"><i class="fa fa-th-large"></i><span>Ready App</span></a>
                                <ul>
                                    <li><Link href={route('inbox')}>Inbox</Link></li>
                                    <li><Link href={route('chat')}>Chat</Link></li>
                                    <li><Link href={route('calendar')}>Calendar</Link></li>                                    
                                    <li><Link href={route('contact')}>Contact list</Link></li>
                                    <li><Link href={route('contact-grid')}>Contact Card <span class="badge badge-warning float-right">New</span></Link></li>
                                    <li><Link href={route('taskboard')}>Taskboard</Link></li>
                                    <li><a href="javascript:void(0);"><span>Blog</span></a>
                                        <ul>
                                            <li><Link href={route('blogdashboard')}>Dashboard</Link></li>
                                            <li><Link href={route('blogpost')}>New Post</Link></li>
                                            <li><Link href={route('bloglist')}>Blog List</Link></li>
                                            <li><Link href={route('blogdetail')}>Blog Detail</Link></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0);"><span>File Manager</span></a>
                                        <ul>
                                            <li><Link href={route('filedashboard')}>Dashboard</Link></li>
                                            <li><Link href={route('documents')}>Documents</Link></li>
                                            <li><Link href={route('media')}>Media</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* <li>
                                <a href="#Widgets" class="has-arrow"><i class="fa fa-puzzle-piece"></i><span>Widgets</span></a>
                                <ul>
                                    <li><a href="widgets-statistics.html">Statistics</a></li>
                                    <li><a href="widgets-data.html">Data</a></li>
                                    <li><a href="widgets-chart.html">Chart</a></li>
                                    <li><a href="widgets-weather.html">Weather</a></li>
                                    <li><a href="widgets-social.html">Social</a></li>
                                    <li><a href="widgets-blog.html">Blog</a></li>
                                    <li><a href="widgets-ecommerce.html">eCommerce</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#uiElements" class="has-arrow"><i class="fa fa-diamond"></i><span>UI Elements</span></a>
                                <ul>
                                    <li><a href="ui-typography.html">Typography</a></li>
                                    <li><a href="ui-tabs.html">Tabs</a></li>
                                    <li><a href="ui-buttons.html">Buttons</a></li>
                                    <li><a href="ui-bootstrap.html">Bootstrap UI</a></li>
                                    <li><a href="ui-icons.html">Icons</a></li>
                                    <li><a href="ui-notifications.html">Notifications</a></li>
                                    <li><a href="ui-colors.html">Colors</a></li>
                                    <li><a href="ui-dialogs.html">Dialogs</a></li>                                    
                                    <li><a href="ui-list-group.html">List Group</a></li>
                                    <li><a href="ui-media-object.html">Media Object</a></li>
                                    <li><a href="ui-modals.html">Modals</a></li>
                                    <li><a href="ui-nestable.html">Nestable</a></li>
                                    <li><a href="ui-progressbars.html">Progress Bars</a></li>
                                    <li><a href="ui-range-sliders.html">Range Sliders</a></li>
                                    <li><a href="ui-treeview.html">Treeview</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#charts" class="has-arrow"><i class="fa fa-area-chart"></i><span>Charts</span></a>
                                <ul>
                                    <li><a href="chart-apex.html">Apex</a> </li>
                                    <li><a href="chart-c3.html">C3 Charts</a></li>
                                    <li><a href="chart-morris.html">Morris</a> </li>
                                    <li><a href="chart-flot.html">Flot</a> </li>
                                    <li><a href="chart-chartjs.html">ChartJS</a> </li>                                    
                                    <li><a href="chart-jquery-knob.html">Jquery Knob</a> </li>
                                    <li><a href="chart-sparkline.html">Sparkline Chart</a></li>
                                    <li><a href="chart-peity.html">Peity</a></li>
                                    <li><a href="chart-gauges.html">Gauges</a></li>
                                </ul>
                            </li> */}
                            {/* <li>
                                <a href="#forms" class="has-arrow"><i class="fa fa-pencil"></i><span>Forms</span></a>
                                <ul>
                                    <li><a href="forms-validation.html">Form Validation</a></li>
                                    <li><a href="forms-advanced.html">Advanced Elements</a></li>
                                    <li><a href="forms-basic.html">Basic Elements</a></li>
                                    <li><a href="forms-wizard.html">Form Wizard</a></li>
                                    <li><a href="forms-dragdropupload.html">Drag &amp; Drop Upload</a></li>
                                    <li><a href="forms-cropping.html">Image Cropping</a></li>
                                    <li><a href="forms-summernote.html">Summernote</a></li>
                                    <li><a href="forms-editors.html">CKEditor</a></li>
                                    <li><a href="forms-markdown.html">Markdown</a></li>
                                </ul>
                            </li> */}
                            {/* <li>
                                <a href="#Tables" class="has-arrow"><i class="fa fa-table"></i><span>Tables</span></a>
                                <ul>
                                    <li><a href="table-basic.html">Tables Example<span class="badge badge-info float-right">New</span></a> </li>
                                    <li><a href="table-normal.html">Normal Tables</a> </li>
                                    <li><a href="table-jquery-datatable.html">Jquery Datatables</a> </li>
                                    <li><a href="table-editable.html">Editable Tables</a> </li>
                                    <li><a href="table-color.html">Tables Color</a> </li>
                                    <li><a href="table-filter.html">Table Filter <span class="badge badge-info float-right">New</span></a> </li>
                                    <li><a href="table-dragger.html">Table dragger <span class="badge badge-info float-right">New</span></a> </li>
                                </ul>
                            </li> */}
                            <li>
                                <a href="#Authentication" class="has-arrow"><i class="fa fa-lock"></i><span>Authentication</span></a>
                                <ul>
                                    <li><Link href={route('/')}>Login</Link></li>
                                    <li><Link href={route('registerprofile')}>Register</Link></li>
                                    <li><Link href={route('forgotpassword')}>Forgot Password</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#Pages" class="has-arrow"><i class="fa fa-file"></i><span>Extra Pages</span></a>
                                <ul>
                                    {/* <li><a href="page-blank.html">Blank Page</a> </li> */}
                                    <li><Link href={route('profile')}>Profile <span class="badge badge-default float-right">v1</span></Link></li>
                                    {/* <li><a href="page-profile2.html">Profile <span class="badge badge-warning float-right">v2</span></a></li> */}
                                    {/* <li><a href="page-gallery.html">Image Gallery <span class="badge badge-default float-right">v1</span></a> </li>
                                    <li><a href="page-gallery2.html">Image Gallery <span class="badge badge-warning float-right">v2</span></a> </li> */}
                                    <li><Link href={route('timeline')}>Timeline</Link></li>
                                    {/* <li><a href="page-timeline-h.html">Horizontal Timeline</a></li> */}
                                    <li><Link href={route('pricing')}>Pricing</Link></li>
                                    <li><Link href={route('invoice')}>Invoices</Link></li>
                                    {/* <li><a href="page-invoices2.html">Invoices <span class="badge badge-warning float-right">v2</span></a></li> */}
                                    {/* <li><a href="page-search-results.html">Search Results</a></li> */}
                                    {/* <li><a href="page-helper-class.html">Helper Classes</a></li> */}
                                    {/* <li><a href="page-teams-board.html">Teams Board</a></li> */}
                                    <li><Link href={route('projectlist')}>Projects List</Link></li>
                                    {/* <li><a href="page-maintenance.html">Maintenance</a></li> */}
                                    <li><Link href={route('testimonials')}>Testimonials</Link></li>
                                    <li><Link href={route('faq')}>FAQ</Link></li>
                                </ul>
                            </li>
                            {/* <li>
                                <a href="#Maps" class="has-arrow"><i class="fa fa-map"></i><span>Maps</span></a>
                                <ul>
                                    <li><a href="map-google.html">Google Map</a></li>
                                    <li><a href="map-yandex.html">Yandex Map</a></li>
                                    <li><a href="map-jvectormap.html">jVector Map</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </nav>
                </div>
                <div class="tab-pane" id="Chat">
                    <form>
                        <div class="input-group m-b-20">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="icon-magnifier"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Search..."/>
                        </div>
                    </form>
                    <ul class="right_chat list-unstyled li_animation_delay">
                        <li>
                            <a href="javascript:void(0);" class="media">
                                <img class="media-object" src="assets/images/xs/avatar1.jpg" alt=""/>
                                <div class="media-body">
                                    <span class="name d-flex justify-content-between">Chris Fox <i class="fa fa-heart-o font-12"></i></span>
                                    <span class="message">chrisfox@gmail.com</span>
                                </div>
                            </a>                            
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="media">
                                <img class="media-object" src="assets/images/xs/avatar2.jpg" alt=""/>
                                <div class="media-body">
                                    <span class="name d-flex justify-content-between">Joge Lucky <i class="fa fa-heart-o font-12"></i></span>
                                    <span class="message">Jogelucky@gmail.com</span>
                                </div>
                            </a>                            
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="media">
                                <img class="media-object" src="assets/images/xs/avatar3.jpg" alt=""/>
                                <div class="media-body">
                                    <span class="name d-flex justify-content-between">Isabella <i class="fa fa-heart-o font-12"></i></span>
                                    <span class="message">Isabella@gmail.com</span>
                                </div>
                            </a>                            
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="media">
                                <img class="media-object" src="assets/images/xs/avatar4.jpg" alt=""/>
                                <div class="media-body">
                                    <span class="name d-flex justify-content-between">Folisise Chosielie <i class="fa fa-heart font-12"></i></span>
                                    <span class="message">FolisiseChosielie@gmail.com</span>
                                </div>
                            </a>                            
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="media">
                                <img class="media-object" src="assets/images/xs/avatar5.jpg" alt=""/>
                                <div class="media-body">
                                    <span class="name d-flex justify-content-between">Alexander <i class="fa fa-heart-o font-12"></i></span>
                                    <span class="message">Alexander@gmail.com</span>
                                </div>
                            </a>                            
                        </li>                        
                    </ul>
                </div>
                <div class="tab-pane" id="setting">
                    <h6>Choose Skin</h6>
                    <ul class="choose-skin list-unstyled">
                        <li data-theme="purple"><div class="purple"></div></li>
                        <li data-theme="blue"><div class="blue"></div></li>
                        <li data-theme="cyan" class="active"><div class="cyan"></div></li>
                        <li data-theme="green"><div class="green"></div></li>
                        <li data-theme="orange"><div class="orange"></div></li>
                        <li data-theme="blush"><div class="blush"></div></li>
                        <li data-theme="red"><div class="red"></div></li>
                    </ul>

                    <ul class="list-unstyled font_setting mt-3">
                        <li>
                            <label class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" name="font" value="font-nunito" checked=""/>
                                <span class="custom-control-label">Nunito Google Font</span>
                            </label>
                        </li>
                        <li>
                            <label class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" name="font" value="font-ubuntu"/>
                                <span class="custom-control-label">Ubuntu Font</span>
                            </label>
                        </li>
                        <li>
                            <label class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" name="font" value="font-raleway"/>
                                <span class="custom-control-label">Raleway Google Font</span>
                            </label>
                        </li>
                        <li>
                            <label class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" name="font" value="font-IBMplex"/>
                                <span class="custom-control-label">IBM Plex Google Font</span>
                            </label>
                        </li>
                    </ul>

                    <ul class="list-unstyled mt-3">
                        <li class="d-flex align-items-center mb-2">
                            <label class="toggle-switch theme-switch">
                                <input type="checkbox"/>
                                <span class="toggle-switch-slider"></span>
                            </label>
                            <span class="ml-3">Enable Dark Mode!</span>
                        </li>
                        <li class="d-flex align-items-center mb-2">
                            <label class="toggle-switch theme-rtl">
                                <input type="checkbox"/>
                                <span class="toggle-switch-slider"></span>
                            </label>
                            <span class="ml-3">Enable RTL Mode!</span>
                        </li>
                        <li class="d-flex align-items-center mb-2">
                            <label class="toggle-switch theme-high-contrast">
                                <input type="checkbox"/>
                                <span class="toggle-switch-slider"></span>
                            </label>
                            <span class="ml-3">Enable High Contrast Mode!</span>
                        </li>
                    </ul>                    

                    <hr/>
                    <h6>General Settings</h6>
                    <ul class="setting-list list-unstyled">
                        <li>
                            <label class="fancy-checkbox">
                                <input type="checkbox" name="checkbox" checked/>
                                <span>Allowed Notifications</span>
                            </label>                      
                        </li>
                        <li>
                            <label class="fancy-checkbox">
                                <input type="checkbox" name="checkbox"/>
                                <span>Offline</span>
                            </label>
                        </li>
                        <li>
                            <label class="fancy-checkbox">
                                <input type="checkbox" name="checkbox"/>
                                <span>Location Permission</span>
                            </label>
                        </li>
                    </ul>

                    <a href="#" target="_blank" class="btn btn-block btn-primary">Buy this item</a>
                    <a href="https://themeforest.net/user/wrraptheme/portfolio" target="_blank" class="btn btn-block btn-secondary">View portfolio</a>
                </div>
                <div class="tab-pane" id="question">
                    <form>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="icon-magnifier"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Search..."/>
                        </div>
                    </form>
                    <ul class="list-unstyled question">
                        <li class="menu-heading">HOW-TO</li>
                        <li><a href="javascript:void(0);">How to Create Campaign</a></li>
                        <li><a href="javascript:void(0);">Boost Your Sales</a></li>
                        <li><a href="javascript:void(0);">Website Analytics</a></li>
                        <li class="menu-heading">ACCOUNT</li>
                        <li><a href="javascript:void(0);">Cearet New Account</a></li>
                        <li><a href="javascript:void(0);">Change Password?</a></li>
                        <li><a href="javascript:void(0);">Privacy &amp; Policy</a></li>
                        <li class="menu-heading">BILLING</li>
                        <li><a href="javascript:void(0);">Payment info</a></li>
                        <li><a href="javascript:void(0);">Auto-Renewal</a></li>                        
                        <li class="menu-button mt-3">
                            <a href="../docs/index.html" class="btn btn-primary btn-block">Documentation</a>
                        </li>
                    </ul>
                </div>    
            </div>          
        </div>
        </div>
    )
}