import FmDocumentsCard from "@/Components/Apps/FmDocumentsCard";
import Header from "@/Components/Common/Header";
import Leftbar from "@/Components/Common/Leftbar";
import Navbar from "@/Components/Common/Navbar";
import Rightbar from "@/Components/Common/Rightbar";

export default function Documents(){
    return(
        <>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content" class="file_manager">
        <div class="container-fluid">
            <Header headerText="Documents" mainNavigate="Dashboard" currentPage="Documents" />
            
            <div className="row clearfix">
                {
                    FmDocumentsCardData.map((data,i)=>{
                        return <FmDocumentsCard
                                    key={i}
                                    name={data.name}
                                    size={data.size}
                                    icon={data.icon}
                                    date={data.date}

                                 />
                    })
                }
                
            </div>
            
        </div>
    </div>
    </>
    )
}

const FmDocumentsCardData =[
    {
      name:'Document_2019.doc',
      icon:'fa fa-file text-info',
      size:'42',
      date:'Nov 02, 2019'
    },
    {
      name:'Document_2019.doc',
      icon:'fa fa-file text-info',
      size:'89',
      date:'Nov 02, 2019'
    },
    {
      name:'Document_2019.doc',
      icon:'fa fa-file text-info',
      size:'89',
      date:'Aug 15, 2019'
    },
    {
      name:'Report2018.xls',
      icon:'fa fa-bar-chart text-warning',
      size:'48',
      date:'Dec 12, 2019'
    },
    {
      name:'Report2018.xls',
      icon:'fa fa-bar-chart text-warning',
      size:'48',
      date:'Dec 12, 2019'
    },
    {
      name:'asdf  hhkj.pdf',
      icon:'fa fa-file text-success',
      size:'48',
      date:'Aug 18, 2019'
    },
    {
      name:'asdf  hhkj.pdf',
      icon:'fa fa-file text-success',
      size:'48',
      date:'Aug 18, 2019'
    },
    {
      name:'asdf  hhkj.pdf',
      icon:'fa fa-file text-success',
      size:'48',
      date:'Aug 18, 2019'
    },
    {
      name:'asdf  hhkj.pdf',
      icon:'fa fa-file text-success',
      size:'48',
      date:'Aug 18, 2019'
    },
    {
      name:'Report2018.xls',
      icon:'fa fa-bar-chart text-warning',
      size:'48',
      date:'Dec 12, 2019'
    },
    {
      name:'Report2018.xls',
      icon:'fa fa-bar-chart text-warning',
      size:'48',
      date:'Dec 12, 2019'
    },
    {
      name:'Report2018.xls',
      icon:'fa fa-bar-chart text-warning',
      size:'48',
      date:'Dec 12, 2019'
    },
    {
      name:'Document_2019.doc',
      icon:'fa fa-file text-info',
      size:'42',
      date:'Nov 02, 2019'
    },
    {
      name:'Document_2019.doc',
      icon:'fa fa-file text-info',
      size:'42',
      date:'Nov 02, 2019'
    },
    {
      name:'Report2018.xls',
      icon:'fa fa-bar-chart text-warning',
      size:'48',
      date:'Dec 12, 2019'
    },
    {
      name:'Document_2019.doc',
      icon:'fa fa-file text-info',
      size:'42',
      date:'Nov 02, 2019'
    }
  ]