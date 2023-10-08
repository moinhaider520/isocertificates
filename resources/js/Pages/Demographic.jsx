import Header from "@/Components/Common/Header";
import Leftbar from "@/Components/Common/Leftbar";
import Navbar from "@/Components/Common/Navbar";
import Rightbar from "@/Components/Common/Rightbar";
import ChannelsCardDemographic from "@/Components/Dashboard/ChannelsCardDemographic";
import ConversionCardDemographic from "@/Components/Dashboard/ConversionCardDemographic";
import ConversionGenderCardDemographic from "@/Components/Dashboard/ConversionGenderCardDemographic";
import HouseholdIncomeCardDemographic from "@/Components/Dashboard/HouseholdIncomeCardDemographic";
import MapCardDemographic from "@/Components/Dashboard/MapCardDemographic";

export default function Demographic(){
    return(
        <>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content">
        <div class="container-fluid">
            <Header headerText="Demographic" mainNavigate="Dashboard" currentPage="Demographic" />

            <div class="row clearfix row-deck">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card primary-bg">
                        <div class="body">
                            <div class="p-15 text-light">
                                <h3>2,120</h3>
                                <span>Users <span class="font-12"><i class="fa fa-level-up"></i> 19%</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card secondary-bg">
                        <div class="body">
                            <div class="p-15 text-light">
                                <h3>2,120</h3>
                                <span>Sessions <span class="font-12"><i class="fa fa-level-up"></i> 13%</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card bg-info">
                        <div class="body">
                            <div class="p-15 text-light">
                                <h3>2,120</h3>
                                <span>Page Views <span class="font-12"><i class="fa fa-level-down"></i> 7%</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card bg-dark">
                        <div class="body">
                            <div class="p-15 text-light">
                                <h3>2,120</h3>
                                <span>Bounce rate <span class="font-12"><i class="fa fa-level-up"></i> 11%</span></span>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <div class="row clearfix row-deck">
                <HouseholdIncomeCardDemographic />
                <ConversionCardDemographic />
                <ChannelsCardDemographic />
            </div>
            <div class="row clearfix row-deck">
                <ConversionGenderCardDemographic />
                <MapCardDemographic />
            </div>
        </div>
        </div>
        </>
    )
}