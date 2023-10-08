import FmDetailsStorageCard from "@/Components/Apps/FmDetailsStorageCard";
import FmFileReportsCard from "@/Components/Apps/FmFileReportsCard";
import FmFolderCard from "@/Components/Apps/FmFolderCard";
import FmStorageCard from "@/Components/Apps/FmStorageCard";
import Header from "@/Components/Common/Header";
import Leftbar from "@/Components/Common/Leftbar";
import Navbar from "@/Components/Common/Navbar";
import Rightbar from "@/Components/Common/Rightbar";

export default function FileManager(){
    return(
        <>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content">
        <div class="container-fluid">
        <Header headerText="File Manager" mainNavigate="Dashboard" currentPage="File Manager" />

        <div className="row clearfix">
                {
                    fmFolderCardData.map((data,i)=>{
                        console.error(data);
                        return <FmFolderCard key={i}
                                name={data.name}
                                 />
                    })
                }
               
            </div>

            <div className="row clearfix">
                <div className="col-lg-3 col-md-5 col-sm-12">
                    <FmStorageCard />
                    {
                        FmDetailsStorageCardData.map((data,i)=>{
                            return <FmDetailsStorageCard
                                        name={data.name}
                                        per={data.per}
                                        usedSpace={data.usedSpace}
                                        color={data.color}
                                     />
                        })
                    }
                    
                </div>
                <FmFileReportsCard />
            </div>
            
        </div>
    </div>
    </>
    )
}

const fmFolderCardData = [
    {
      name:"Iconinc Project"
    },
    {
      name:"Themeforest"
    },
    {
      name:"New Website"
    },
    {
      name:"My Folder"
    }
  ]

  const FmDetailsStorageCardData = [
    {
      name:'Documents',
      usedSpace:'2',
      per:18,
      color:'blue'
    },
    {
      name:'Media',
      usedSpace:'10',
      per:34,
      color:'purple'
    },
    {
      name:'Images',
      usedSpace:'20',
      per:67,
      color:'green'
    }
  ]