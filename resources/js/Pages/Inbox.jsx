import ComposeMailCard from "@/Components/Apps/ComposeMailCard";
import InboxCard from "@/Components/Apps/InboxCard";
import Header from "@/Components/Common/Header";
import Leftbar from "@/Components/Common/Leftbar";
import Navbar from "@/Components/Common/Navbar";
import Rightbar from "@/Components/Common/Rightbar";
import { useState } from "react";

export default function Inbox(){
    const [isCompose, setIsCompose] = useState(false);

  const handleCompose = () => {
    setIsCompose(true);
  };

  const handleCancelCompose = () => {
    setIsCompose(false);
  };
    return(
        <>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content">
        <div class="container-fluid">
            <Header headerText="Inbox" mainNavigate="Dashboard" currentPage="Inbox" />

            <div className="row clearfix">
        {isCompose ? (
          <ComposeMailCard onCancel={handleCancelCompose} />
        ) : (
          <InboxCard onCompose={handleCompose} />
        )}
      </div>           
        </div>
        </div>
        </>
    )
}