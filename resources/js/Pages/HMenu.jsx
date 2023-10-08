import HorizontalMenu from "@/Components/HorizontalMenu";
import '../../assets/css/h-menu.css';
export default function HMenu(){
    return(
        <>
        <div class="over-menu"></div>
    <header class="header" id="header-sroll">
        <div class="container">
            <div class="desk-menu">
                <div class="logo">
                    <div class="d-flex">
                        <h1 class="logo-adn"><a title="Iconic" href="#">Iconic <span>Admin</span></a></h1>
                        <ul class="nav navbar-nav">
                            <li class="dropdown">
                                <a href="javascript:void(0);" class="dropdown-toggle icon-menu" data-toggle="dropdown">
                                    <i class="fa fa-bell"></i>
                                    <span class="notification-dot"></span>
                                </a>
                                <ul class="dropdown-menu notifications">
                                    <li class="header"><strong>You have 4 new Notifications</strong></li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="media">
                                                <div class="media-left">
                                                    <i class="icon-info text-warning"></i>
                                                </div>
                                                <div class="media-body">
                                                    <p class="text">Campaign <strong>Holiday Sale</strong> is nearly reach budget limit.</p>
                                                    <span class="timestamp">10:00 AM Today</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>                               
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="media">
                                                <div class="media-left">
                                                    <i class="icon-like text-success"></i>
                                                </div>
                                                <div class="media-body">
                                                    <p class="text">Your New Campaign <strong>Holiday Sale</strong> is approved.</p>
                                                    <span class="timestamp">11:30 AM Today</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                        <li>
                                        <a href="javascript:void(0);">
                                            <div class="media">
                                                <div class="media-left">
                                                    <i class="icon-pie-chart text-info"></i>
                                                </div>
                                                <div class="media-body">
                                                    <p class="text">Website visits from Twitter is 27% higher than last week.</p>
                                                    <span class="timestamp">04:00 PM Today</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="media">
                                                <div class="media-left">
                                                    <i class="icon-info text-danger"></i>
                                                </div>
                                                <div class="media-body">
                                                    <p class="text">Error on website analytics configurations</p>
                                                    <span class="timestamp">Yesterday</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="footer"><a href="javascript:void(0);" class="more">See all notifications</a></li>
                                </ul>
                            </li>
                            <li><a href="#" class="icon-menu right_setting"><i class="fa fa-gear"></i></a></li>
                            <li><a href="page-login.html" class="icon-menu"><i class="fa fa-power-off"></i></a></li>
                        </ul>
                    </div>
                </div>
                <nav class="box-menu">
                    <div class="menu-container">
                        <div class="menu-head">
                            <h4 class="text-left mb-0">Menu</h4>
                        </div>
                        <div class="menu-header-container">
                            <ul id="cd-primary-nav" class="menu">
                                <li class="menu-item menu-item-has-children">
                                    <a href="#">Dashboard</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item active"><a href="index.html">Analytical</a></li>
                                        <li class="menu-item"><a href="index9.html">IoT Dashboard</a></li>
                                        <li class="menu-item"><a href="index2.html">Demographic</a></li>
                                        <li class="menu-item"><a href="index6.html">Project Board</a></li>
                                        <li class="menu-item"><a href="index7.html">Crypto Dashboard</a></li>
                                        <li class="menu-item"><a href="index8.html">eCommerce</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-has-children">
                                    <a href="#">App</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item"><a href="app-inbox.html">Inbox</a></li>
                                        <li class="menu-item"><a href="app-chat.html">Chat</a></li>
                                        <li class="menu-item"><a href="app-calendar.html">Calendar</a></li>                                    
                                        <li class="menu-item"><a href="app-contact.html">Contact list</a></li>
                                        <li class="menu-item"><a href="app-contact-grid.html">Contact Card <span class="badge badge-warning float-right">New</span></a></li>
                                        <li class="menu-item"><a href="app-taskboard.html">Taskboard</a></li>
                                        <li class="menu-item menu-item-has-children">
                                            <a href="#">Blog<i class="fa fa-angle-right"></i></a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="blog-dashboard.html">Dashboard</a></li>
                                                <li class="menu-item"><a href="blog-post.html">New Post</a></li>
                                                <li class="menu-item"><a href="blog-list.html">Blog List</a></li>
                                                <li class="menu-item"><a href="blog-details.html">Blog Detail</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item menu-item-has-children">
                                            <a href="#">File Manager<i class="fa fa-angle-right"></i></a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="file-dashboard.html">Dashboard</a></li>
                                                <li class="menu-item"><a href="file-documents.html">Documents</a></li>
                                                <li class="menu-item"><a href="file-media.html">Media</a></li>
                                                <li class="menu-item"><a href="file-images.html">Images</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-has-children">
                                    <a href="#">Component</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item menu-item-has-children">
                                            <a href="#">Widgets<i class="fa fa-angle-right"></i></a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="widgets-statistics.html">Statistics</a></li>
                                                <li class="menu-item"><a href="widgets-data.html">Data</a></li>
                                                <li class="menu-item"><a href="widgets-chart.html">Chart</a></li>
                                                <li class="menu-item"><a href="widgets-weather.html">Weather</a></li>
                                                <li class="menu-item"><a href="widgets-social.html">Social</a></li>
                                                <li class="menu-item"><a href="widgets-blog.html">Blog</a></li>
                                                <li class="menu-item"><a href="widgets-ecommerce.html">eCommerce</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item menu-item-has-children">
                                            <a href="#">UI Elements<i class="fa fa-angle-right"></i></a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="ui-typography.html">Typography</a></li>
                                                <li class="menu-item"><a href="ui-tabs.html">Tabs</a></li>
                                                <li class="menu-item"><a href="ui-buttons.html">Buttons</a></li>
                                                <li class="menu-item"><a href="ui-bootstrap.html">Bootstrap UI</a></li>
                                                <li class="menu-item"><a href="ui-icons.html">Icons</a></li>
                                                <li class="menu-item"><a href="ui-notifications.html">Notifications</a></li>
                                                <li class="menu-item"><a href="ui-colors.html">Colors</a></li>
                                                <li class="menu-item"><a href="ui-dialogs.html">Dialogs</a></li>                                    
                                                <li class="menu-item"><a href="ui-list-group.html">List Group</a></li>
                                                <li class="menu-item"><a href="ui-media-object.html">Media Object</a></li>
                                                <li class="menu-item"><a href="ui-modals.html">Modals</a></li>
                                                <li class="menu-item"><a href="ui-nestable.html">Nestable</a></li>
                                                <li class="menu-item"><a href="ui-progressbars.html">Progress Bars</a></li>
                                                <li class="menu-item"><a href="ui-range-sliders.html">Range Sliders</a></li>
                                                <li class="menu-item"><a href="ui-treeview.html">Treeview</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item menu-item-has-children">
                                            <a href="#">Charts<i class="fa fa-angle-right"></i></a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="chart-apex.html">Apex</a> </li>
                                                <li class="menu-item"><a href="chart-c3.html">C3 Charts</a></li>
                                                <li class="menu-item"><a href="chart-morris.html">Morris</a> </li>
                                                <li class="menu-item"><a href="chart-flot.html">Flot</a> </li>
                                                <li class="menu-item"><a href="chart-chartjs.html">ChartJS</a> </li>                                    
                                                <li class="menu-item"><a href="chart-jquery-knob.html">Jquery Knob</a> </li>
                                                <li class="menu-item"><a href="chart-sparkline.html">Sparkline Chart</a></li>
                                                <li class="menu-item"><a href="chart-peity.html">Peity</a></li>
                                                <li class="menu-item"><a href="chart-gauges.html">Gauges</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item menu-item-has-children">
                                            <a href="#">Forms<i class="fa fa-angle-right"></i></a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="forms-validation.html">Form Validation</a></li>
                                                <li class="menu-item"><a href="forms-advanced.html">Advanced Elements</a></li>
                                                <li class="menu-item"><a href="forms-basic.html">Basic Elements</a></li>
                                                <li class="menu-item"><a href="forms-wizard.html">Form Wizard</a></li>
                                                <li class="menu-item"><a href="forms-dragdropupload.html">Drag &amp; Drop Upload</a></li>
                                                <li class="menu-item"><a href="forms-cropping.html">Image Cropping</a></li>
                                                <li class="menu-item"><a href="forms-summernote.html">Summernote</a></li>
                                                <li class="menu-item"><a href="forms-editors.html">CKEditor</a></li>
                                                <li class="menu-item"><a href="forms-markdown.html">Markdown</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item menu-item-has-children">
                                            <a href="#">Tables<i class="fa fa-angle-right"></i></a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="table-basic.html">Tables Example<span class="badge badge-info float-right">New</span></a> </li>
                                                <li class="menu-item"><a href="table-normal.html">Normal Tables</a> </li>
                                                <li class="menu-item"><a href="table-jquery-datatable.html">Jquery Datatables</a> </li>
                                                <li class="menu-item"><a href="table-editable.html">Editable Tables</a> </li>
                                                <li class="menu-item"><a href="table-color.html">Tables Color</a> </li>
                                                <li class="menu-item"><a href="table-filter.html">Table Filter <span class="badge badge-info float-right">New</span></a> </li>
                                                <li class="menu-item"><a href="table-dragger.html">Table dragger <span class="badge badge-info float-right">New</span></a> </li>
                                            </ul>
                                        </li>
                                        <li class="menu-item menu-item-has-children">
                                            <a href="#">Authentication<i class="fa fa-angle-right"></i></a>
                                            <ul class="sub-menu">
                                                <li class="menu-item"><a href="page-login.html">Login</a></li>
                                                <li class="menu-item"><a href="page-register.html">Register</a></li>
                                                <li class="menu-item"><a href="page-lockscreen.html">Lockscreen</a></li>
                                                <li class="menu-item"><a href="page-forgot-password.html">Forgot Password</a></li>
                                                <li class="menu-item"><a href="page-404.html">Page 404</a></li>
                                                <li class="menu-item"><a href="page-403.html">Page 403</a></li>
                                                <li class="menu-item"><a href="page-500.html">Page 500</a></li>
                                                <li class="menu-item"><a href="page-503.html">Page 503</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-has-children">
                                    <a href="#">More Pages</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item"><a href="page-blank.html">Blank Page</a> </li>
                                        <li class="menu-item"><a href="page-pricing.html">Pricing</a></li>
                                        <li class="menu-item"><a href="page-invoices.html">Invoices</a></li>
                                        <li class="menu-item"><a href="page-invoices2.html">Invoices <span class="badge badge-warning float-right">v2</span></a></li>
                                        <li class="menu-item"><a href="page-search-results.html">Search Results</a></li>
                                        <li class="menu-item"><a href="page-helper-class.html">Helper Classes</a></li>
                                        <li class="menu-item"><a href="page-teams-board.html">Teams Board</a></li>
                                        <li class="menu-item"><a href="page-projects-list.html">Projects List</a></li>
                                        <li class="menu-item"><a href="page-maintenance.html">Maintenance</a></li>
                                        <li class="menu-item"><a href="page-testimonials.html">Testimonials</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item menu-item-has-children li_right_side">
                                    <a href="#">User</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item"><a href="page-profile.html">Profile <span class="badge badge-default float-right">v1</span></a></li>
                                        <li class="menu-item"><a href="page-profile2.html">Profile <span class="badge badge-warning float-right">v2</span></a></li>
                                        <li class="menu-item"><a href="page-gallery.html">Image Gallery <span class="badge badge-default float-right">v1</span></a> </li>
                                        <li class="menu-item"><a href="page-gallery2.html">Image Gallery <span class="badge badge-warning float-right">v2</span></a> </li>
                                        <li class="menu-item"><a href="page-timeline.html">Timeline</a></li>
                                        <li class="menu-item"><a href="page-timeline-h.html">Horizontal Timeline</a></li>
                                        <li class="menu-item"><a href="page-faq.html">FAQ</a></li>
                                    </ul>
                                </li>
                                <li class="contact menu-item ">
                                    <a href="#">Link</a>
                                </li>
                                <li class="line"></li>
                            </ul>
                        </div>
                        <div class="menu-foot">
                            <div class="social">
                                <a href="#" target="_blank"><i class="fa fa-facebook-f"></i></a>
                                <a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
                                <a href="#" target="_blank"><i class="fa fa-youtube"></i></a>
                                <a href="#" target="_blank"><i class="fa fa-instagram"></i></a>
                                <a href="#" target="_blank"><i class="fa fa-linkedin"></i></a>
                            </div>
                            <hr/>
                            <address>
                                <span class="email"><i class="icon-mail"></i> info@thememakker.com</span>
                            </address>
                        </div>
                    </div>
                    <div class="hamburger-menu">
                        <div class="bar"></div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
        </>
    )
}