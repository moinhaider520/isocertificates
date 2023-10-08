import Navbar from "@/Components/Common/Navbar";
import Avatar from "../../assets/images/xs/avatar1.jpg";
import Avatar1 from "../../assets/images/xs/avatar2.jpg";
import Avatar2 from "../../assets/images/xs/avatar3.jpg";
import Avatar3 from "../../assets/images/xs/avatar4.jpg";
import Avatar4 from "../../assets/images/xs/avatar5.jpg";
import Leftbar from "@/Components/Common/Leftbar";
import Rightbar from "@/Components/Common/Rightbar";
import Header from "@/Components/Common/Header";
import ChatCard from "@/Components/Apps/ChatCard";

export default function Chat(){
    return(
        <>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
         <div id="main-content">
        <div class="container-fluid">
        <Header headerText="Chat" mainNavigate="Dashboard" currentPage="Chat" />
            
            <div class="row clearfix">
                <ChatCard />
            </div>
        </div>
        </div>
        </>
    )
}