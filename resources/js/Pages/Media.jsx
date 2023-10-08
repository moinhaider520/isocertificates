import FileMediaCard from "@/Components/Apps/FileMediaCard";
import Header from "@/Components/Common/Header";
import Leftbar from "@/Components/Common/Leftbar";
import Navbar from "@/Components/Common/Navbar";
import Rightbar from "@/Components/Common/Rightbar";

export default function Media(){
    return(
        <>
       <Navbar/>
       <Leftbar/>
       <Rightbar/>
        <div id="main-content" class="file_manager">
        <div class="container-fluid">
        <Header headerText="Media" mainNavigate="Dashboard" currentPage="Media" />
            
        <div className="row clearfix">
                {
                    fileMediaCardData.map((data,i)=>{
                        return <FileMediaCard 
                                name={data.name}
                                icon={data.icon}
                                size={data.size}
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

const fileMediaCardData =[
    {
      name:'hellonew.mkv',
      icon:'fa fa-image',
      size:'720',
      date:'Dec 08, 2017'
    },
    {
      name:'Jee Le Zara Song.mpg4',
      icon:'fa fa-youtube-square text-danger',
      size:'32',
      date:'Oct 11, 2016'
    },
    {
      name:'hellonew.mkv',
      icon:'fa fa-image',
      size:'720',
      date:'Dec 08, 2017'
    },
    {
      name:'hellonew.mkv',
      icon:'fa fa-image',
      size:'720',
      date:'Dec 08, 2017'
    },
    {
      name:'Jee Le Zara Song.mpg4',
      icon:'fa fa-youtube-square text-danger',
      size:'32',
      date:'Oct 11, 2016'
    },
    {
      name:'Jee Le Zara Song.mpg4',
      icon:'fa fa-youtube-square text-danger',
      size:'32',
      date:'Oct 11, 2016'
    },
    {
      name:'hellonew.mkv',
      icon:'fa fa-image',
      size:'720',
      date:'Dec 08, 2017'
    },
    {
      name:'Jee Le Zara Song.mpg4',
      icon:'fa fa-youtube-square text-danger',
      size:'32',
      date:'Oct 11, 2016'
    },
  ]