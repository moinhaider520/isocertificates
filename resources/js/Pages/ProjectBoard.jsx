import Navbar from "@/Components/Common/Navbar";
import Avatar from "../../assets/images/xs/avatar1.jpg";
import Avatar1 from "../../assets/images/xs/avatar2.jpg";
import Avatar2 from "../../assets/images/xs/avatar3.jpg";
import Avatar3 from "../../assets/images/xs/avatar4.jpg";
import Avatar4 from "../../assets/images/xs/avatar5.jpg";
import Avatar5 from "../../assets/images/xs/avatar6.jpg";
import Avatar6 from "../../assets/images/xs/avatar7.jpg";
import Avatar7 from "../../assets/images/xs/avatar8.jpg";
import Avatar8 from "../../assets/images/xs/avatar9.jpg";
import Leftbar from "@/Components/Common/Leftbar";
import Rightbar from "@/Components/Common/Rightbar";
import Header from "@/Components/Common/Header";
import SparkleCard2 from "@/Components/Dashboard/SparkleCard2";
import WorkReportCard from "@/Components/Dashboard/WorkReportCard";
import SectorReportCard from "@/Components/Dashboard/SectorReportCard";
import ToDoListCard from "@/Components/Dashboard/ToDoListCard";
import WorkloadbyTeam from "@/Components/Dashboard/WorkloadbyTeam";
import ProjectBoardPieCard from "@/Components/Dashboard/ProjectBoardPieCard";
import ProjectListCard from "@/Components/Dashboard/ProjectListCard";

export default function ProjectBoard(){
    return(
        <>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content">
        <div class="container-fluid">
            <Header headerText="Project Board" mainNavigate="Dashboard" currentPage="Project Board" />

            <div className="row clearfix row-deck">
              <div className="col-lg-6 col-md-12">
                <div className="row clearfix row-deck">
                  {
                     splarkelDataProjectBoard.map((data,i)=>{
                      return <SparkleCard2 key={i} seriesData={data.sparklineData} height={data.height} heading = {data.heading} money={data.money} perText={data.perText} />
                      })
                  }
                  <div className="col-lg-6 col-md-12">
                  <WorkReportCard />
                  </div>
                  
                  <SectorReportCard />
                  </div>  
              </div>
              <div className="col-lg-6 col-md-12">
                <ToDoListCard />
              </div>
            </div>
            <div className="row clearfix row-deck">
                  <WorkloadbyTeam />
                  <ProjectBoardPieCard header="Design" TeamLeader="Barbara Kelly" price="29,012" graphColor='rgb(23, 162, 184)' graphValue={73} />
                  <ProjectBoardPieCard header="Development" TeamLeader="Orlando Lentz" price="1,29,201" graphColor='rgb(255, 193, 7)' graphValue={46}/>
            </div>
            
            <div className="row clearfix">
                  <ProjectListCard  projectData={projectListData}/>
            </div>
            
        </div>
        </div>
        </>
    )
}

const projectListData =[
    {
      Project:"iNext - One Page Responsive Template",
      Created:'14 July, 2020',
      Deadline:"22 Aug, 2020",
      Prograss:29,
      Lead:Avatar,
      Team:[Avatar2,Avatar3],
      Status:'InActive'
    },
    {
      Project:"InfiniO 4.1",
      Created:'14 July, 2020',
      Deadline:"8 Aug, 2020",
      Prograss:48,
      Lead:Avatar,
      Team:[Avatar,Avatar2],
      Status:'Active'
    },
    {
      Project:"InfiniO 4.1",
      Created:'14 July, 2020',
      Deadline:"15 Sep, 2020",
      Prograss:48,
      Lead:Avatar,
      Team:[Avatar5,Avatar3],
      Status:'Active'
    }
  ]

const splarkelDataProjectBoard =[
    {
      heading:'INCOME ANALYSIS',
      height:50,
    money:'$22,500',
    perText:'8% High then last month',
    sparklineData:{
        type: 'line',
        data:[4,1,5,2,7,3,4],
        areaStyle:{
          color: "#73cec7",
        },
        itemStyle: {
            color: "#39afa6",
        },
        symbolSize: 1,
      }
    },
    {
      heading:'SALES INCOME',
      height:50,
    money:'$9,500',
    perText:'12% High then last month',
    sparklineData:{
        type: 'line',
        data:[1,4,2,3,6,1],
        areaStyle:{
          color: "#efc26b",
        },
        itemStyle: {
            color: "#ffa901",
        },
        symbolSize: 1,
      }
    }
  ]