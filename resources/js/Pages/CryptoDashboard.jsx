import Coin from "../../assets/images/coin/BTC.svg";
import Coin1 from "../../assets/images/coin/ETH.svg";
import Coin2 from "../../assets/images/coin/XRP.svg";
import Coin3 from "../../assets/images/coin/neo.svg";

export default function CryptoDashboard(){
    return(
        <div id="main-content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <h2>Cryptocurrency</h2>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html"><i class="fa fa-dashboard"></i></a></li>                            
                            <li class="breadcrumb-item">Dashboard</li>
                            <li class="breadcrumb-item active">Cryptocurrency</li>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="d-flex flex-row-reverse">
                            <div class="page_action">
                                <button type="button" class="btn btn-primary"><i class="fa fa-download"></i> Download report</button>
                                <button type="button" class="btn btn-secondary"><i class="fa fa-send"></i> Send report</button>
                            </div>
                            <div class="p-2 d-flex">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card">
                        <div class="body">
                            <div class="currency_state d-flex">
                                <div><img src={Coin} width="40" /></div>
                                <div class="ml-3">
                                    <div class="name">Bitcoin</div>
                                    <h5 class="mb-0">0.005034</h5>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card">
                        <div class="body">
                            <div class="currency_state d-flex">
                                <div><img src={Coin1} width="40" /></div>
                                <div class="ml-3">
                                    <div class="name">Ethereum</div>
                                    <h5 class="mb-0">0.001282</h5>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card">
                        <div class="body">
                            <div class="currency_state d-flex">
                                <div><img src={Coin2} width="40" /></div>
                                <div class="ml-3">
                                    <div class="name">Ripple</div>
                                    <h5 class="mb-0">0.005034</h5>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card">
                        <div class="body">
                            <div class="currency_state d-flex">
                                <div><img src={Coin3} width="40" /></div>
                                <div class="ml-3">
                                    <div class="name">Neo</div>
                                    <h5 class="mb-0">0.002841</h5>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card">
                        <div class="body">
                            <div class="currency_state d-flex">
                                <div><img src={Coin} width="40" /></div>
                                <div class="ml-3">
                                    <div class="name">Cardano</div>
                                    <h5 class="mb-0">0.003612</h5>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card">
                        <div class="body">
                            <div class="currency_state d-flex">
                                <div><img src={Coin2} width="40" /></div>
                                <div class="ml-3">
                                    <div class="name">Stellar</div>
                                    <h5 class="mb-0">0.001010</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card">
                        <div class="body">
                            <div class="currency_state d-flex">
                                <div><img src={Coin3} width="40" /></div>
                                <div class="ml-3">
                                    <div class="name">RaiBlocks</div>
                                    <h5 class="mb-0">0.009812</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card">
                        <div class="body">
                            <div class="currency_state d-flex">
                                <div><img src={Coin2} width="40" /></div>
                                <div class="ml-3">
                                    <div class="name">Monero</div>
                                    <h5 class="mb-0">0.001292</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row clearfix row-deck">
                <div class="col-lg-12 col-md-12">
                    <div class="card user_statistics">
                        <div class="header">
                            <h2>Crypto Statistics <small>9% High then last week</small></h2>
                            <ul class="header-dropdown">
                                <li><a href="#" title=""><i class="fa fa-envelope"></i></a></li>
                                <li><a href="#" title=""><i class="fa fa-download"></i></a></li>
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
                                <div class="d-flex">
                                    <ul class="nav nav-tabs-new2">
                                        <li class="nav-item"><a class="nav-link show active" data-toggle="tab" href="#Bitcoin-new2">Bitcoin</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Neo-new2">Neo</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Ethereum-new2">Ethereum</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <select class="custom-select custom-select-sm">
                                        <option>Open this select menu</option>
                                        <option value="1">Today’s</option>
                                        <option value="2">This Week</option>
                                        <option selected value="3">Last Week</option>
                                        <option value="4">This Month</option>
                                        <option value="5">Last Month</option>
                                        <option value="6">Last 12 Month</option>
                                        <option value="7">Custom Dates</option>
                                    </select>
                                </div>
                            </div>
                            <div id="apex-CandleStick" class="ct-chart"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row clearfix row-deck">
                <div class="col-lg-8 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2>Top Trending Country</h2>
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
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="card top_widget">
                                        <div class="body">
                                            <div class="content">
                                                <div class="text mb-2 text-uppercase">USA</div>
                                                <h4 class="number mb-0">25K <span class="font-12 text-muted"><i class="fa fa-level-up"></i> 11%</span></h4>
                                                <small class="text-muted">Analytics for last week</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="card top_widget">
                                        <div class="body">
                                            <div class="content">
                                                <div class="text mb-2 text-uppercase">Canada</div>
                                                <h4 class="number mb-0">25K <span class="font-12 text-muted"><i class="fa fa-level-down"></i> 7%</span></h4>
                                                <small class="text-muted">Analytics for last week</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="card top_widget">
                                        <div class="body">
                                            <div class="content">
                                                <div class="text mb-2 text-uppercase">Australia</div>
                                                <h4 class="number mb-0">25K <span class="font-12 text-muted"><i class="fa fa-level-down"></i> 3%</span></h4>
                                                <small class="text-muted">Analytics for last week</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div id="world-map-markers" class="jvector-map" style="height: 270px"></div> */}
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="header">
                            <h2>Popular Cryptocurrency <small>15% High then last month</small></h2>
                        </div>
                        <div class="body text-center">                            
                            <div class="Popular_Cryptocurrency">6,4,8</div>                            
                        </div>
                        <div class="body">
                            <div class="table-responsive">
                                <table class="table table-hover mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={Coin}  width="35" />
                                            </td>
                                            <td>
                                                <small>Bitcoin BTC</small>
                                                <h5 class="mb-0">0.00015434</h5>
                                            </td>
                                            <td>
                                                <div class="sparkline m-t-10" data-type="bar" data-width="97%" data-height="26px" data-bar-Width="4" data-bar-Spacing="4" data-bar-Color="#393c3e">-2,3,5,6,7,-8,7,4,6,-5</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={Coin3}  width="35" />
                                            </td>
                                            <td>
                                                <small>Neo NEO</small>
                                                <h5 class="mb-0">0.00000015</h5>
                                            </td>
                                            <td>
                                                <div class="sparkline m-t-10" data-type="bar" data-width="97%" data-height="26px" data-bar-Width="4" data-bar-Spacing="4" data-bar-Color="#393c3e">8,5,-3,2,2,3,-5,-6,-7,5</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={Coin1}  width="35" />
                                            </td>
                                            <td>
                                                <small>Dash DASH</small>
                                                <h5 class="mb-0">0.00000952</h5>
                                            </td>
                                            <td>
                                                <div class="sparkline m-t-10" data-type="bar" data-width="97%" data-height="26px" data-bar-Width="4" data-bar-Spacing="4" data-bar-Color="#393c3e">-6,-5,4,6,5,5,-2,3,4,-2</div>
                                            </td>
                                        </tr>                                 
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2>Order Statistics</h2>
                            <ul class="header-dropdown">
                                <li><a href="#" title=""><i class="fa fa-envelope"></i></a></li>
                                <li><a href="#" title=""><i class="fa fa-download"></i></a></li>
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
                            <div class="table-responsive">
                                <table class="table table-hover js-basic-example dataTable table-custom mb-0">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Date</th>
                                            <th>Type</th>
                                            <th>Amount BTC</th>
                                            <th>BTC Remaining</th>
                                            <th>Price</th>
                                            <th>USD</th>
                                            <th>Fee (%)</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>28-July-2018 06:51:51</td>
                                            <td>Buy</td>
                                            <td>
                                                0.58647</td>
                                            <td>
                                                0.58647</td>
                                            <td>11900.12</td>
                                            <td>$ 1597.78</td>
                                            <td>0.023</td>
                                            <td>
                                                <button class="btn btn-sm round btn-outline-success">Accept</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>28-July-2018 06:50:50</td>
                                            <td>Sell</td>
                                            <td>
                                                1.38647</td>
                                            <td>
                                                0.38647</td>
                                            <td>11905.09</td>
                                            <td>$ 2496.36</td>
                                            <td>0.017</td>
                                            <td>
                                                    <button class="btn btn-sm round btn-outline-success">Accept</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>28-July-2018 06:49:51</td>
                                            <td >Buy</td>
                                            <td>
                                                0.45879</td>
                                            <td>
                                                0.45879</td>
                                            <td>11901.85</td>
                                            <td>$ 3165.44</td>
                                            <td>0.013</td>
                                            <td>
                                                <button class="btn btn-sm round btn-outline-success"> Accept</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>28-July-2018 06:51:51</td>
                                            <td>Buy</td>
                                            <td>
                                                0.89877</td>
                                            <td>
                                                0.89877</td>
                                            <td>11899.28</td>
                                            <td>$ 25830.6</td>
                                            <td>0.011</td>
                                            <td>
                                                    <button class="btn btn-sm round btn-outline-success">Accept</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>28-July-2018 06:51:51</td>
                                            <td>Sell</td>
                                            <td>
                                                0.45712</td>
                                            <td>
                                                0.45712</td>
                                            <td>11908.19</td>
                                            <td>$ 2586.34</td>
                                            <td>0.024</td>
                                            <td>
                                                    <button class="btn btn-sm round btn-outline-danger"> Cancel</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>28-July-2018 06:51:51</td>
                                            <td>Buy</td>
                                            <td>
                                                0.58647</td>
                                            <td>
                                                0.58647</td>
                                            <td>11900.12</td>
                                            <td>$ 1597.78</td>
                                            <td>0.023</td>
                                            <td>
                                                <button class="btn btn-sm round btn-outline-success">Accept</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>28-July-2018 06:50:50</td>
                                            <td>Sell</td>
                                            <td>
                                                1.38647</td>
                                            <td>
                                                0.38647</td>
                                            <td>11905.09</td>
                                            <td>$ 2496.36</td>
                                            <td>0.017</td>
                                            <td>
                                                    <button class="btn btn-sm round btn-outline-success">Accept</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>28-July-2018 06:51:51</td>
                                            <td>Buy</td>
                                            <td>
                                                0.58647</td>
                                            <td>
                                                0.58647</td>
                                            <td>11900.62</td>
                                            <td>$ 5623.59</td>
                                            <td>0.019</td>
                                            <td>
                                                <button class="btn btn-sm round btn-outline-danger"> Cancel</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>28-July-2018 06:51:51</td>
                                            <td>Buy</td>
                                            <td>
                                                0.89877</td>
                                            <td>
                                                0.89877</td>
                                            <td>11899.28</td>
                                            <td>$ 25830.6</td>
                                            <td>0.011</td>
                                            <td>
                                                    <button class="btn btn-sm round btn-outline-success">Accept</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>28-July-2018 06:51:51</td>
                                            <td>Sell</td>
                                            <td>
                                                0.45712</td>
                                            <td>
                                                0.45712</td>
                                            <td>11908.19</td>
                                            <td>$ 2586.34</td>
                                            <td>0.024</td>
                                            <td>
                                                    <button class="btn btn-sm round btn-outline-danger"> Cancel</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>28-July-2018 06:51:51</td>
                                            <td>Buy</td>
                                            <td>
                                                0.58647</td>
                                            <td>
                                                0.58647</td>
                                            <td>11900.12</td>
                                            <td>$ 1597.78</td>
                                            <td>0.023</td>
                                            <td>
                                                <button class="btn btn-sm round btn-outline-success">Accept</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>28-July-2018 06:50:50</td>
                                            <td>Sell</td>
                                            <td>
                                                1.38647</td>
                                            <td>
                                                0.38647</td>
                                            <td>11905.09</td>
                                            <td>$ 2496.36</td>
                                            <td>0.017</td>
                                            <td>
                                                    <button class="btn btn-sm round btn-outline-success">Accept</button>
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
    )
}