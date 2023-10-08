import Header from "@/Components/Common/Header";
import Avatar from "../../assets/images/xs/avatar1.jpg";
import Avatar1 from "../../assets/images/xs/avatar2.jpg";
import Avatar2 from "../../assets/images/xs/avatar3.jpg";
import Avatar3 from "../../assets/images/xs/avatar4.jpg";
import Avatar4 from "../../assets/images/xs/avatar5.jpg";
import Navbar from "@/Components/Common/Navbar";
import Leftbar from "@/Components/Common/Leftbar";
import Rightbar from "@/Components/Common/Rightbar";
import { useState } from "react";
import ContacAddCard from "@/Components/Apps/ContacAddCard";
import ContactComCard from "@/Components/Apps/ContactComCard";
import HeaderCard from "@/Components/ElementsUI/HeaderCard";

export default function Contact(){
    const [addModal, setAddModal] = useState(false);

  const handleAddModalOpen = () => {
    setAddModal(true);
  };

  const handleAddModalClose = () => {
    setAddModal(false);
  };
    return(
    <>
    <Navbar/>
    <Leftbar/>
    <Rightbar/>
    <div id="main-content">
        <div class="container-fluid">
        <Header headerText="Contacts" mainNavigate="Dashboard" currentPage="Contacts" />
        <HeaderCard
        headerText="Contact List"
        mainNavigate="App"
        currentPage="Contact List"
        hideDownload
        hideSend
        showGrid
        showAdd
        onAdd={handleAddModalOpen}
      />
      <div className="row clearfix row-deck">
        {constacCardData.map((data, i) => {
          return (
            <ContactComCard key={i} name={data.name} imageUrl={data.imageUrl} />
          );
        })}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card">
            <div className="body text-center">
              <div className="p-t-65 p-b-65">
                <h6>Add New Contact</h6>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={handleAddModalOpen}
                  data-toggle="modal"
                  data-target="#addcontact"
                >
                  <i className="fa fa-plus-circle"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContacAddCard show={addModal} onClose={handleAddModalClose} />
      </div>
    </div>
    </>
    )
}

const constacCardData =[
    {
      name:'Robert Hammer',
      imageUrl:Avatar
    },
    {
      name:'Orlando Lentz',
      imageUrl:Avatar1
    },
    {
      name:'Barbara Kelly',
      imageUrl:Avatar2
    },
    {
      name:'Brian Swader',
      imageUrl:Avatar3
    },
    {
      name:'Robert Hammer',
      imageUrl:Avatar4
    },
    {
      name:'Frank Camly',
      imageUrl:Avatar
    },
    {
      name:'Rose Rivera',
      imageUrl:Avatar2
    }
  ]