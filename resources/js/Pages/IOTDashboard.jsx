import Header from "@/Components/Common/Header";
import Leftbar from "@/Components/Common/Leftbar";
import Navbar from "@/Components/Common/Navbar";
import Rightbar from "@/Components/Common/Rightbar";
import SparkleCard from "@/Components/Dashboard/SparkleCard";
import SpendingbyYearIOT from "@/Components/Dashboard/SpendingbyYearIOT";
import TempratureCard from "@/Components/Dashboard/TempratureCard";
import UsedCardIOT from "@/Components/Dashboard/UsedCardIOT";

export default function IOTDashboard(){
    return(
        <>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content">
        <div class="container-fluid">
            <Header headerText="IOTDashboard" mainNavigate="Dashboard" currentPage="IOTDashboard" />

            <div class="row clearfix row-deck">
            {
                iOTSparkleCardData.map((data,i)=>{
                    return <SparkleCard key={i} seriesData={data.sparklineData} height={data.height} heading = {data.heading} money={data.money} />
                })
            }
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card">
                        <div class="body d-flex justify-content-between">
                            <div>
                                <h6 class="mb-0">Security System</h6>
                                <small class="text-success">Triggered</small><small class="text-danger d-none">Loosed</small>
                            </div>
                            <div>
                                <button class="btn btn-outline-danger" type="button">Loose</button>
                                <button class="btn btn-outline-success d-none" type="button">Trigger</button>
                            </div>
                        </div>
                        <hr/>
                        <div class="body d-flex justify-content-between">
                            <div>
                                <h6 class="mb-0">Main Gate</h6>
                                <small class="text-success d-none">Closed</small><small class="text-danger">Opened</small>
                            </div>
                            <div>
                                <button class="btn btn-outline-danger d-none" type="button">Open</button>
                                <button class="btn btn-outline-success" type="button">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row clearfix row-deck">
                <SpendingbyYearIOT />
                <TempratureCard />
                <UsedCardIOT />
            </div>
            
            <div class="row clearfix row-deck">
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2>Lights Indoor</h2>
                            <ul class="header-dropdown m-r--5">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button">
                                        <i class="zmdi zmdi-more-vert"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">All On</a></li>
                                        <li><a href="javascript:void(0);">All Off</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <ul class="list-group">
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Kitchen</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox"/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Dining Room</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox" checked=""/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Living Room</h6>
                                    <span class="text-danger">Not Connected</span>
                                </li>
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Kitchen</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox"/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Bath Room</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox" checked=""/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Store Room</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox"/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2>Lights Outdoor</h2>
                            <ul class="header-dropdown m-r--5">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button">
                                        <i class="zmdi zmdi-more-vert"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">All On</a></li>
                                        <li><a href="javascript:void(0);">All Off</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <ul class="list-group">
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Front Door</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox"/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Garage</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox"/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Garden</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox" checked=""/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Back Door</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox" checked=""/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Pool</h6>
                                    <span class="text-danger">Fused</span>
                                </li>
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Main Door</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox"/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2>Other Appliences</h2>
                            <ul class="header-dropdown m-r--5">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button">
                                        <i class="zmdi zmdi-more-vert"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">All On</a></li>
                                        <li><a href="javascript:void(0);">All Off</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <ul class="list-group">
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">TV</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox"/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Apple Tv</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox" checked=""/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Sound Ststem</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox" checked=""/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Air Conditioner</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox"/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Fridge</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox" checked=""/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                                <li class="d-flex justify-content-between list-group-item align-items-center">
                                    <h6 class="mb-0">Washing Machine</h6>
                                    <label class="toggle-switch">
                                        <input type="checkbox" checked=""/>
                                        <span class="toggle-switch-slider"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        </>
    )
}

const iOTSparkleCardData =[
    {
      heading:'ENERGY USE',
      height:99,
    money:'250 kw/h ',
    perText:'19% compared to last week',
    sparklineData:{
        type: 'line',
        data:[4,1,5,2,7,3,4],
        areaStyle:{
          color: "#73cec7",
        },
        itemStyle: {
            color: "#73cec7",
        },
        symbolSize: 1,
      }
    },
    {
      heading:'LIGHTS',
    money:'6 Lights are ON',
    height:99,
    perText:'19% compared to last week',
    sparklineData:{
        type: 'line',
        data:[1,4,2,3,6,2],
        areaStyle:{
          color: "#efc26b",
        },
        itemStyle: {
            color: "#efc26b",
        },
        symbolSize: 1,
      }
    },
    {
      heading:'DAILY AVG TEMPRATURE',
    money:'20° C',
    height:99,
    perText:'19% compared to last week',
    sparklineData:{
        type: 'line',
        data:[1,4,2,3,1,5],
        areaStyle:{
          color: "#84d4a6",
        },
        itemStyle: {
            color: "#84d4a6",
        },
        symbolSize: 1,
      }
    }
  ]