import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

function Mainmenu({ activeKey }) {
  const [toggleExtra,setExtra] = useState(false);
  const [toggleAuth,setAuth] = useState(false);
  const [toggleReady,setReady] = useState(false);
  const [toggleBlog,setBlog] = useState(false);
  const [toggleFile,setFile] = useState(false);
  const [toggleDashboard,setDashboard] = useState(false);

  const [mainActive, setMainActive] = useState([true, false, false, false, false, false, false, false, false, false]);
  const [blogActive, setBlogActive] = useState(false);
  const [fMActive, setFMActive] = useState(false);

  useEffect(() => {
    if (activeKey === 'dashboard' || activeKey === 'iOT' || activeKey === 'demographic' || activeKey === 'projectBoard' || activeKey === 'crypto' || activeKey === 'eCommerce') {
      setMainActive([true, false, false, false, false, false, false, false, false, false]);
      setBlogActive(false);
      setFMActive(false);
    } else if (activeKey === 'inbox' || activeKey === 'chat' || activeKey === 'calendar' || activeKey === 'contactList' || activeKey === 'contactCard' || activeKey === 'taskbar') {
      setMainActive([false, true, false, false, false, false, false, false, false, false]);
      setBlogActive(false);
      setFMActive(false);
    } else if (activeKey === 'statistics' || activeKey === 'dataWidgets' || activeKey === 'chartWidgets' || activeKey === 'weatherWidget' || activeKey === 'socialWidget' || activeKey === 'blogWidgets' || activeKey === 'eCommerceWidgets') {
      setMainActive([false, false, true, false, false, false, false, false, false, false]);
      setBlogActive(false);
      setFMActive(false);
    } else if (activeKey === 'typographyUI' || activeKey === 'tabsUI' || activeKey === 'buttonsUI' || activeKey === 'bootstrapUI' || activeKey === 'iconsUI' || activeKey === 'notificationsUI' || activeKey === 'colorsUI' || activeKey === 'dialogsUI' || activeKey === 'listGroupUI' || activeKey === 'mediaObjectUI' || activeKey === 'modalsPopupsUI' || activeKey === 'sortableNestableUI' || activeKey === 'progressBarsUI' || activeKey === 'rangeSlidersUI' || activeKey === 'treeviewUI') {
      setMainActive([false, false, false, true, false, false, false, false, false, false]);
      setBlogActive(false);
      setFMActive(false);
    }

    if (activeKey === 'blogDashboard' || activeKey === 'blogPost' || activeKey === 'blogList' || activeKey === 'blogDetails') {
      setMainActive([false, true, false, false, false, false, false, false, false, false]);
      setBlogActive(true);
      setFMActive(false);
    }

    if (activeKey === 'fmDashboard' || activeKey === 'documents' || activeKey === 'fileMedia' || activeKey === 'fileImages') {
      setMainActive([false, true, false, false, false, false, false, false, false, false]);
      setBlogActive(false);
      setFMActive(true);
    }
  }, [activeKey]);

  return (
    <div className="tab-pane active" id="menu">
        <nav id="left-sidebar-nav" className="sidebar-nav">
            <ul id="main-menu" className="metismenu li_animation_delay">
                <li className={ mainActive[0] ?`active`:'' }>
                    <a href="#Dashboard" className="has-arrow"
                    onClick={()=>{
                        setDashboard(!toggleDashboard)
                    }}
                    ><i className="fa fa-dashboard"></i><span>Dashboard</span></a>
                    <ul className={toggleDashboard==true ? "collapse in" : "collapse"}>
                        <li><Link href={route('main')}>Analytical</Link></li>
                        <li><Link href={route('iotdashboard')}>IoT Dashboard</Link></li>
                        <li><Link href={route('demographic')}>Demographic</Link></li>
                        <li><Link href={route('projectboard')}>Project Board</Link></li>
                        <li><Link href={route('ecommerce')}>eCommerce</Link></li>
                    </ul>
                </li>
                <li className={toggleReady&&("active")}>
                    <a nohref className="has-arrow"  onClick={()=>{setReady(!toggleReady)
                }}><i className="fa fa-th-large"></i><span>Ready App</span></a>
                    <ul aria-expanded="true" className={toggleReady==true ? `collapse in`:'collapse' }>
                        <li><Link href={route('inbox')}>Inbox</Link></li>
                        <li><Link href={route('chat')}>Chat</Link></li>
                        <li><Link href={route('calendar')}>Calendar</Link></li>                                    
                        <li><Link href={route('contact')}>Contact list</Link></li>
                        {/* <li><Link href="#">Contact Card <span className="badge badge-warning float-right">New</span></Link></li> */}
                        <li><Link href={route('taskboard')}>Taskboard</Link></li>
                        <li style={{cursor:"pointer"}}><a nohref onClick={()=>setBlog(!toggleBlog)}><span>Blog</span></a>
                            <ul aria-expanded="false" className={toggleBlog==true ? "collapse in" : "collapse"}>
                                <li><Link href={route('blogdashboard')}>Dashboard</Link></li>
                                <li><Link href={route('blogpost')}>New Post</Link></li>
                                <li><Link href={route('bloglist')}>Blog List</Link></li>
                                <li><Link href={route('blogdetail')}>Blog Detail</Link></li>
                            </ul>
                        </li>
                        <li><a nohref onClick={()=>setFile(!toggleFile)}><span>File Manager</span></a>
                            <ul aria-expanded="false" className={toggleFile==true ? "collapse in" : "collapse"}>
                                <li><Link href={route('filedashboard')}>Dashboard</Link></li>
                                <li><Link href={route('documents')}>Documents</Link></li>
                                <li><Link href={route('media')}>Media</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                {/* <li className={ mainActive[2] ?`active`:'' }>
                    <Link href="#Widgets" className="has-arrow"
                    onClick={()=>{
                        var mA = [false,false,false,false,false,false,false,false,false,false]
                        mA[2] = !this.state.mainActive[2]
                        this.setState({
                            mainActive:mA,
                            blogActive:false,
                            fMActive:false
                        })
                    }}
                    ><i className="fa fa-puzzle-piece"></i><span>Widgets</span></Link>
                    <ul aria-expanded="false" className={mainActive[2] ?`collapse in`:'collapse' }>                                    
                        <li className={activeKey === 'statistics'?`active`:''} onClick={()=>{ if(activeKey !== 'statistics'){ navigation.navigate("statistics"); } }}><Link href="#">Statistics</Link></li>
                        <li className={activeKey === 'dataWidgets'?`active`:''} onClick={()=>{ if(activeKey !== 'dataWidgets'){ navigation.navigate("dataWidgets"); } }}><Link href="#">Data</Link></li>
                        <li className={activeKey === 'chartWidgets'?`active`:''} onClick={()=>{ if(activeKey !== 'chartWidgets'){ navigation.navigate("chartWidgets"); } }}><Link href="#">Chart</Link></li>
                        <li className={activeKey === 'weatherWidget'?`active`:''} onClick={()=>{ if(activeKey !== 'weatherWidget'){ navigation.navigate("weatherWidget"); } }}><Link href="#">Weather</Link></li>
                        <li className={activeKey === 'socialWidget'?`active`:''} onClick={()=>{ if(activeKey !== 'socialWidget'){ navigation.navigate("socialWidget"); } }}><Link href="#">Social</Link></li>
                        <li className={activeKey === 'blogWidgets'?`active`:''} onClick={()=>{ if(activeKey !== 'blogWidgets'){ navigation.navigate("blogWidgets"); } }}><Link href="#">Blog</Link></li>
                        <li className={activeKey === 'eCommerceWidgets'?`active`:''} onClick={()=>{ if(activeKey !== 'eCommerceWidgets'){ navigation.navigate("eCommerceWidgets"); } }}><Link href="#">eCommerce</Link></li>
                    </ul>
                </li>
                <li className={ mainActive[3] ?`active`:'' }>
                    <Link href="#uiElements" className="has-arrow"
                    onClick={()=>{
                        var mA = [false,false,false,false,false,false,false,false,false,false]
                        mA[3] = !this.state.mainActive[3]
                        this.setState({
                            mainActive:mA,
                            blogActive:false,
                            fMActive:false
                        })
                    }}
                    ><i className="fa fa-diamond"></i><span>UI Elements</span></Link>
                    <ul aria-expanded="false" className={mainActive[3] ?`collapse in`:'collapse' }>
                        <li className={activeKey === 'typographyUI'?`active`:''} onClick={()=>{ if(activeKey !== 'typographyUI'){ navigation.navigate("typographyUI"); } }}><Link href="#">Typography</Link></li>
                        <li className={activeKey === 'tabsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'tabsUI'){ navigation.navigate("tabsUI"); } }}><Link href="#">Tabs</Link></li>
                        <li className={activeKey === 'buttonsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'buttonsUI'){ navigation.navigate("buttonsUI"); } }}><Link href="#">Buttons</Link></li>
                        <li className={activeKey === 'bootstrapUI'?`active`:''} onClick={()=>{ if(activeKey !== 'bootstrapUI'){ navigation.navigate("bootstrapUI"); } }}><Link href="#">Bootstrap UI</Link></li>
                        <li className={activeKey === 'iconsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'iconsUI'){ navigation.navigate("iconsUI"); } }}><Link href="#">Icons</Link></li>
                        <li className={activeKey === 'notificationsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'notificationsUI'){ navigation.navigate("notificationsUI"); } }}><Link href="#">Notifications</Link></li>
                        <li className={activeKey === 'colorsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'colorsUI'){ navigation.navigate("colorsUI"); } }}><Link href="#">Colors</Link></li>
                        <li className={activeKey === 'dialogsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'dialogsUI'){ navigation.navigate("dialogsUI"); } }}><Link href="#">Dialogs</Link></li>                                    
                        <li className={activeKey === 'listGroupUI'?`active`:''} onClick={()=>{ if(activeKey !== 'listGroupUI'){ navigation.navigate("listGroupUI"); } }}><Link href="#">List Group</Link></li>
                        <li className={activeKey === 'mediaObjectUI'?`active`:''} onClick={()=>{ if(activeKey !== 'mediaObjectUI'){ navigation.navigate("mediaObjectUI"); } }}><Link href="#">Media Object</Link></li>
                        <li className={activeKey === 'modalsPopupsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'modalsPopupsUI'){ navigation.navigate("modalsPopupsUI"); } }}><Link href="#">Modals</Link></li>
                        <li className={activeKey === 'sortableNestableUI'?`active`:''} onClick={()=>{ if(activeKey !== 'sortableNestableUI'){ navigation.navigate("sortableNestableUI"); } }}><Link href="#">Nestable</Link></li>
                        <li className={activeKey === 'progressBarsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'progressBarsUI'){ navigation.navigate("progressBarsUI"); } }}><Link href="#">Progress Bars</Link></li>
                        <li className={activeKey === 'rangeSlidersUI'?`active`:''} onClick={()=>{ if(activeKey !== 'rangeSlidersUI'){ navigation.navigate("rangeSlidersUI"); } }}><Link href="#">Range Sliders</Link></li>
                        <li className={activeKey === 'treeviewUI'?`active`:''} onClick={()=>{ if(activeKey !== 'treeviewUI'){ navigation.navigate("treeviewUI"); } }}><Link href="#">Treeview</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="#charts" className="has-arrow"><i className="fa fa-area-chart"></i><span>Charts</span></Link>
                    <ul aria-expanded="false" className="collapse">
                        <li><Link href="chart-apex.html">Apex</Link> </li>
                        <li><Link href="chart-c3.html">C3 Charts</Link></li>
                        <li><Link href="chart-morris.html">Morris</Link> </li>
                        <li><Link href="chart-flot.html">Flot</Link> </li>
                        <li><Link href="chart-chartjs.html">ChartJS</Link> </li>                                    
                        <li><Link href="chart-jquery-knob.html">Jquery Knob</Link> </li>
                        <li><Link href="chart-sparkline.html">Sparkline Chart</Link></li>
                        <li><Link href="chart-peity.html">Peity</Link></li>
                        <li><Link href="chart-gauges.html">Gauges</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="#forms" className="has-arrow"><i className="fa fa-pencil"></i><span>Forms</span></Link>
                    <ul aria-expanded="false" className="collapse">
                        <li><Link href="forms-validation.html">Form Validation</Link></li>
                        <li><Link href="forms-advanced.html">Advanced Elements</Link></li>
                        <li><Link href="forms-basic.html">Basic Elements</Link></li>
                        <li><Link href="forms-wizard.html">Form Wizard</Link></li>
                        <li><Link href="forms-dragdropupload.html">Drag &amp; Drop Upload</Link></li>
                        <li><Link href="forms-cropping.html">Image Cropping</Link></li>
                        <li><Link href="forms-summernote.html">Summernote</Link></li>
                        <li><Link href="forms-editors.html">CKEditor</Link></li>
                        <li><Link href="forms-markdown.html">Markdown</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="#Tables" className="has-arrow"><i className="fa fa-table"></i><span>Tables</span></Link>
                    <ul aria-expanded="false" className="collapse">
                        <li><Link href="table-basic.html">Tables Example<span className="badge badge-info float-right">New</span></Link> </li>
                        <li><Link href="table-normal.html">Normal Tables</Link> </li>
                        <li><Link href="table-jquery-datatable.html">Jquery Datatables</Link> </li>
                        <li><Link href="table-editable.html">Editable Tables</Link> </li>
                        <li><Link href="table-color.html">Tables Color</Link> </li>
                        <li><Link href="table-filter.html">Table Filter <span className="badge badge-info float-right">New</span></Link> </li>
                        <li><Link href="table-dragger.html">Table dragger <span className="badge badge-info float-right">New</span></Link> </li>
                    </ul>
                </li> */}
                <li className={toggleAuth&&("active")}>
                    <a nohref onClick={()=>setAuth(!toggleAuth)} className="has-arrow"><i className="fa fa-lock"></i><span>Authentication</span></a>
                    <ul aria-expanded="false" className={toggleAuth==true ? "collapse in" : "collapse"}>
                        <li><Link href={route('/')}>Login</Link></li>
                        <li><Link href={route('registerprofile')}>Register</Link></li>
                        <li><Link href={route('forgotpassword')}>Forgot Password</Link></li>
                    </ul>
                </li>
                <li className={toggleExtra&&("active")}>
                    <a nohref onClick={()=>setExtra(!toggleExtra)} className="has-arrow"><i className="fa fa-file"></i><span>Extra Pages</span></a>
                    <ul aria-expanded="false" className={toggleExtra==true ? "collapse in" : "collapse"}>
                        <li><Link href={route('profile')}>Profile <span className="badge badge-default float-right">v1</span></Link></li>
                        <li><Link href={route('timeline')}>Timeline</Link></li>
                        <li><Link href={route('pricing')}>Pricing</Link></li>
                        <li><Link href={route('invoice')}>Invoices</Link></li>
                        <li><Link href={route('projectlist')}>Projects List</Link></li>
                        <li><Link href={route('testimonials')}>Testimonials</Link></li>
                        <li><Link href={route('faq')}>FAQ</Link></li>
                    </ul>
                </li>
                {/* <li>
                    <Link href="#Maps" className="has-arrow"><i className="fa fa-map"></i><span>Maps</span></Link>
                    <ul aria-expanded="false" className="collapse">
                        <li><Link href="map-google.html">Google Map</Link></li>
                        <li><Link href="map-yandex.html">Yandex Map</Link></li>
                        <li><Link href="map-jvectormap.html">jVector Map</Link></li>
                    </ul>
                </li> */}
            </ul>
        </nav>
    </div>
  );
}

export default Mainmenu;
