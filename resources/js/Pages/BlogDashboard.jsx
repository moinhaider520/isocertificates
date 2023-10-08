import BlogMarketingCampaignCard from "@/Components/Apps/BlogMarketingCampaignCard";
import BlogPieCard from "@/Components/Apps/BlogPieCard";
import BlogSparkelCard from "@/Components/Apps/BlogSparkelCard";
import BlogVisitorsStatisticsCard from "@/Components/Apps/BlogVisitorsStatisticsCard";
import BounceRateCard from "@/Components/Apps/BounceRateCard";
import ReturnVisitorCard from "@/Components/Apps/ReturnVisitorCard";
import Header from "@/Components/Common/Header";
import Leftbar from "@/Components/Common/Leftbar";
import Navbar from "@/Components/Common/Navbar";
import Rightbar from "@/Components/Common/Rightbar";

export default function BlogDashboard(){
    return(
        <>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content">
        <div class="container-fluid">
        <Header headerText="Blogs" mainNavigate="Dashboard" currentPage="Blogs" />

        <div className="row clearfix row-deck">
                {
                    blogsparkleCardData.map((data,i)=>{
                        return <BlogSparkelCard
                                key={i}
                                heading={data.heading}
                                perText={data.perText}
                                money={data.money}
                                icon={data.icon}
                                sparklineData={data.sparklineData}
                                 />
                    })
                }
                
            </div>
            <div className="row clearfix row-deck">
                {
                    blogPieCardData.map((data,i)=>{
                        return <BlogPieCard
                                key={"key"+i}
                                heading={data.heading}
                                per={data.per}
                                value={data.value}
                                color={data.color}
                                 />
                    })
                }
                
            </div>

            <div className="row clearfix row-deck">
                <ReturnVisitorCard />
                <BounceRateCard />
            </div>

            <div className="row clearfix row-deck">
                <BlogVisitorsStatisticsCard />
                <BlogMarketingCampaignCard />
            </div>
        </div>
    </div>
    </>
    )
}

const blogsparkleCardData =[
    {
      heading:'LIKES',
      height:50,
    money:'22,500',
    perText:4,
    icon:"fa fa-thumbs-o-up",
    sparklineData:{
        type: 'line',
        data:[2,3,1,5,4,2,3,1,5,4,7,8,2,3,1,4,6,4,4,7,8,2,3,1,4,6],
        areaStyle:{
          color: "#59C4BC",
        },
        itemStyle: {
            color: "#fff",
        },
        symbolSize: 1,
      }
    },
    {heading:'COMMENTS',
    height:50,
    money:'500',
    icon:"fa fa-comment",
    perText:11,
    sparklineData:{
        type: 'line',
        data:[7,8,2,3,1,4,6,2,3,1,5,4,7,8,2,3,1,4,6,4,4,2,3,1,5,4,5,4,4],
        areaStyle:{
          color: "#637AAE",
        },
        itemStyle: {
            color: "#fff",
        },
        symbolSize: 1,
      }
  
    },
    {heading:'SHARE',
    height:50,
    money:'2,215',
    icon:"fa fa-share-alt",
    perText:9,
    sparklineData:{
        type: 'line',
        data:[2,3,1,5,4,7,8,2,3,1,5,6,4,4,2,3,1,5,4,7,8,2,3,1,4,6,5,4,4],
        areaStyle:{
          color: "#84d4a6",
        },
        itemStyle: {
            color: "#fff",
        },
        symbolSize: 1,
      }
    },
    {heading:'VIEW',
    height:50,
    money:'4,21,415',
    icon:"fa fa-eye",
    perText:2,
    sparklineData:{
        type: 'line',
        data:[2,3,1,5,4,7,8,2,3,1,5,6,4,4,2,3,1,5,4,7,8,2,3,1,4,6,5,4,4],
        areaStyle:{
          color: "#efc26b",
        },
        itemStyle: {
            color: "#fff",
        },
        symbolSize: 1,
      }
    },
  ]
  
const blogPieCardData =[
    {
      heading:'Twitter',
      per:56,
      value:66,
      color:'rgb(76, 175, 80)'
    },
    {
      heading:'Facebook',
      per:87,
      value:26,
      color:'rgb(123, 105, 236)'
    },
    {
      heading:'Instagram',
      per:16,
      value:76,
      color:'rgb(249, 189, 83)'
    },
    {
      heading:'Google +',
      per:37,
      value:76,
      color:'rgb(249, 189, 83)'
    }
  ]