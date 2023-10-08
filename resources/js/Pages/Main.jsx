import { Head, Link } from "@inertiajs/react";
import User from '../../assets/images/user.png';
import EChartsReact from "echarts-for-react";
import { useState } from "react";
import Navbar from "@/Components/Common/Navbar";
import Leftbar from "@/Components/Common/Leftbar";
import SparkleCard from "@/Components/Dashboard/SparkleCard";
import NonSparkleCard from "@/Components/Dashboard/NonSparkleCard";
import Header from "@/Components/Common/Header";
export default function Main(){
    const [toggleUserMenu,setUserMenu] = useState(false);
    return(
        <>
        <Head title="Dashboard"/>
        <Navbar/>
        <Leftbar/>
        <div id="main-content">
        <div class="container-fluid">
        <Header headerText="Dashboard" mainNavigate="Dashboard" currentPage="Dashboard" />
            <div className="row clearfix row-deck">
            {
                sparkleCardData.map((data,i)=>{
                    return <SparkleCard key={i} seriesData={data.sparklineData} height={data.height} heading = {data.heading} money={data.money} />
                })
            }
            {
                nonSparkleCardData.map((data,i)=>{
                    return <NonSparkleCard key={i} heading={data.heading} growth={data.growth} money={data.money} icon={data.icon} />
                })
            }
                
               
            </div>

            <div class="row clearfix row-deck">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="header">
                            <h2>Google Analytics Dashboard</h2>
                            <ul class="header-dropdown">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another Action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <select class="custom-select custom-select-sm">
                                        <option>Open this select menu</option>
                                        <option value="1">Sessions</option>
                                        <option value="2">Users</option>
                                        <option selected value="3">Page Views</option>
                                        <option value="4">Bounce Rate</option>
                                        <option value="5">Location</option>
                                        <option value="6">Pages</option>
                                        <option value="7">Referrers</option>
                                        <option value="8">Searches</option>
                                        <option value="9">Technology</option>
                                        <option value="10">404 Errors</option>
                                    </select>
                                </div>
                                <div class="d-flex">
                                    <button type="button" class="btn btn-outline-primary mr-2"><i class="fa fa-download"></i> Download report</button>
                                    <button type="button" class="btn btn-outline-secondary"><i class="fa fa-send"></i> Send report</button>
                                </div>                                
                            </div>
                            <EChartsReact
                        option={{
                            color: ['rgb(89, 196, 188)', 'rgb(99, 122, 174)'],
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            toolbox: {
                                show: false,
                               
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    axisTick: {show: true,
                                        lineStyle: {
                                            color: 'rgb(89, 196, 188)'
                                          }
                                    },
                                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nav','Dec'],
                                }
                            ],
                            yAxis: [
                                {
                                    show:false,
                                    type: 'value',
                                    axisTick: {show: false},
                                }
                            ],
                            series: [
                                {
                                    name: '2019',
                                    type: 'bar',
                                    barGap: 0,
                                    data: [11,8,22,18,19,12,17,22,18,32,9,17]
                                },
                                {
                                    name: '2020',
                                    type: 'bar',
                                    data: [7,7,5,7,9,6,8,11,17,19,6,12]
                                },
                                
                            ]
                        }}
                          opts={{renderer: 'svg'}} // use svg to render the chart.  
                        />

                        </div>
                    </div>
                </div>
            </div>

            <div class="row clearfix row-deck">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="header">
                            <h2>Use by Device</h2>
                            <ul class="header-dropdown">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another Action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <EChartsReact
                        option={{
                            color: ['rgb(89, 196, 188)', 'rgb(99, 122, 174)','rgb(47, 170, 161)'],
                            tooltip: {
                                trigger: 'item',
                                formatter: '{b}: {d}%'
                            },
                            legend: {
                                top:250,
                                data: ['Desktop','Mobile','Tablet']
                            },
                            series: [
                                {
                                    name: '',
                                    type: 'pie',
                                    top:-15,
                                    radius: ['50%', '90%'],
                                    avoidLabelOverlap: true,
                                    label: {
                                        show: true,
                                        fontSize: '10',
                                        position: 'inner',
                                        formatter: '{d}%',
                                        color:'#fff  '
                                    },
                                    emphasis: {
                                        label: {
                                            show: false,
                                            fontSize: '30',
                                            fontWeight: 'bold'
                                        }
                                    },
                                    labelLine: {
                                        show: true
                                    },
                                    data: [
                                        {value: 50, name: 'Desktop'},
                                        {value: 35, name: 'Mobile'},
                                        {value: 15, name: 'Tablet'},
                                    ]
                                }
                            ]
                        }}
                          opts={{renderer: 'svg'}} // use svg to render the chart.
                            
                        />
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="header">
                            <h2>Use by Audience</h2>
                            <ul class="header-dropdown">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another Action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <EChartsReact
                        option={{
                            color: ['rgb(121, 84, 173)', 'rgb(231, 104, 134)','rgb(120, 47, 223)'],
                            tooltip: {
                                trigger: 'item',
                                formatter: '{b}: {d}%'
                            },
                            legend: {
                                top:250,
                                data: ['Male','Female','Other']
                            },
                            series: [
                                {
                                    name: '',
                                    type: 'pie',
                                    radius: ['50%', '90%'],
                                    avoidLabelOverlap: true,
                                    label: {
                                        show: true,
                                        position: 'inner',
                                        formatter: '{d}%'
                                    },
                                    emphasis: {
                                        label: {
                                            show: false,
                                            fontSize: '30',
                                            fontWeight: 'bold'
                                        }
                                    },
                                    labelLine: {
                                        show: true,
                                        position: 'center'
                                    
                                    },
                                    data: [
                                        {value: 52.4, name: 'Male'},
                                        {value: 28.6, name: 'Female'},
                                        {value: 19, name: 'Other'},
                                    ]
                                }
                            ]
                        }}
                          opts={{renderer: 'svg'}} // use svg to render the chart.
                            
                        />
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="header">
                            <h2>Use by Browser</h2>
                            <ul class="header-dropdown">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another Action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <table class="table mb-0">
                                <thead>
                                    <tr>
                                      <th>Browser</th>
                                      <th>Sessions</th>
                                      <th>Bounce rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Chrome</td>
                                        <td>23,233 <i class="fa fa-level-up"></i></td>
                                        <td>47.12%</td>
                                    </tr>
                                    <tr>
                                        <td>Firefox</td>
                                        <td>13,901 <i class="fa fa-level-up"></i></td>
                                        <td>33.02%</td>
                                    </tr>
                                    <tr>
                                        <td>Safari</td>
                                        <td>3,015 <i class="fa fa-level-up"></i></td>
                                        <td>24.12%</td>
                                    </tr>
                                    <tr>
                                        <td>Edge</td>
                                        <td>233 <i class="fa fa-level-down"></i></td>
                                        <td>17.33%</td>
                                    </tr>
                                    <tr>
                                        <td>Opera</td>
                                        <td>821 <i class="fa fa-level-down"></i></td>
                                        <td>7.12%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}


const nonSparkleCardData =[
    {
      growth:"13",
      heading:"SESSIONS",
      money:'3,251',
      icon:"fa fa-flag"
    },
    {
      growth:"7",
      heading:"USERS",
      money:'25K',
      icon:"fa fa-users"
    },
    {
      growth:"4",
      heading:"VISITORS",
      money:'21K',
      icon:"fa fa-user"
    },
    {
      growth:"15",
      heading:"LIKES",
      money:'53K',
      icon:"fa fa-thumbs-up"
    }
]

const sparkleCardData =[
    {
      heading:'NEW SESSIONS',
      height:50,
    money:'22,500',
    perText:'19% compared to last week',
    sparklineData:{
        type: 'line',
        data:[4,1,5,2,7,3,4],
        areaStyle:{
          color: "#f79647",
        },
        itemStyle: {
            color: "#f79647",
        },
        symbolSize: 1,
      }
    },
    {heading:'GOAL COMPLETIONS',
    height:50,
    money:'1,12,500',
    perText:'19% compared to last week',
    sparklineData:{
        type: 'line',
        data:[1,4,2,3,6,2],
        areaStyle:{
          color: "#604a7b",
        },
        itemStyle: {
            color: "#604a7b",
        },
        symbolSize: 1,
      }

    },
    {heading:'TIME ON SITE',
    height:50,
    money:'1,070',
    perText:'19% compared to last week',
    sparklineData:{
        type: 'line',
        data:[1,4,2,3,1,5],
        areaStyle:{
          color: "#4aacc5",
        },
        itemStyle: {
            color: "#4aacc5",
        },
        symbolSize: 1,
      }
    },
    {heading:'BOUNCE RATE',
    height:50,
    money:'10K',
    perText:'19% compared to last week',
    sparklineData:{
        type: 'line',
        data:[1,3,5,1,4,2],
        areaStyle:{
          color: "#4f81bc",
        },
        itemStyle: {
            color: "#4f81bc",
        },
        symbolSize: 1,
      }
    },
  ]