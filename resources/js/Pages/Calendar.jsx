import Avatar from "../../assets/images/xs/avatar1.jpg";
import Avatar1 from "../../assets/images/xs/avatar2.jpg";
import Avatar2 from "../../assets/images/xs/avatar3.jpg";
import Avatar3 from "../../assets/images/xs/avatar4.jpg";
import Avatar4 from "../../assets/images/xs/avatar5.jpg";
import User from "../../assets/images/user.png";
import Header from "@/Components/Common/Header";
import Navbar from "@/Components/Common/Navbar";
import Leftbar from "@/Components/Common/Leftbar";
import Rightbar from "@/Components/Common/Rightbar";
import AppUserCard from "@/Components/Apps/AppUserCard";
import CalendarCard from "@/Components/Apps/CalendarCard";
export default function Calendar(){
    return(
    <>
    <Navbar/>
    <Leftbar/>
    <Rightbar/>
    <div id="main-content">
        <div class="container-fluid">
            <Header headerText="Chat" mainNavigate="Dashboard" currentPage="Chat" />

            <div class="row clearfix row-deck">
            <CalendarCard/>
               <AppUserCard />
            </div>
        </div>
    </div>

    </>
    )
}