import Navbar from "@/Components/Common/Navbar";
import Avatar from "../../assets/images/xs/avatar1.jpg";
import Avatar1 from "../../assets/images/xs/avatar2.jpg";
import Avatar2 from "../../assets/images/xs/avatar3.jpg";
import Avatar3 from "../../assets/images/xs/avatar4.jpg";
import Avatar4 from "../../assets/images/xs/avatar5.jpg";
import Avatar5 from "../../assets/images/xs/avatar6.jpg";
import Leftbar from "@/Components/Common/Leftbar";
import Rightbar from "@/Components/Common/Rightbar";
import Header from "@/Components/Common/Header";
import ECommerceDisplayCard from "@/Components/Dashboard/ECommerceDisplayCard";
import CategoryCard from "@/Components/Dashboard/CategoryCard";
import AnnualReportCard from "@/Components/Dashboard/AnnualReportCard";
import NewOrdersCard from "@/Components/Dashboard/NewOrdersCard";
import TopSellingCountryCard from "@/Components/Dashboard/TopSellingCountryCard";
import RecentTransactionsCard from "@/Components/Dashboard/RecentTransactionsCard";

export default function ECommerce(){
    return(
        <>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content">
        <div class="container-fluid">
            <Header headerText="ECommerce" mainNavigate="Dashboard" currentPage="ECommerce" />

            <div className="row clearfix row-deck">
              {
                ECommerceDisplayCardData.map((data,i)=>{
                  return <ECommerceDisplayCard
                            header={data.header}
                            value={data.value}
                            per={data.per}
                            icon={data.icon}
                            data={data.data}
                            background={data.background}
                           />
                })
              }
            </div>

            <div className="row clearfix row-deck">
              <CategoryCard />
              <AnnualReportCard />
            </div>

            <div className="row clearfix row-deck">
              <NewOrdersCard />
              <TopSellingCountryCard /> 
            </div>

            <div className="row clearfix ">
              <RecentTransactionsCard />
            </div>
            
        </div>
        </div>
        </>
    )
}

const ECommerceDisplayCardData =[
    {
       header:"NEW ORDER",
       value:'3,251',
       per:'8.1',
       icon:"fa fa-shopping-basket",
       data:[2,9,4,6,5,5,1,3,4,1,5,8,9,6,7,2,3,5,6,7,1,5,1,6,3,2,6,9,4,7,6],
       background:'primary-bg'
    },
    {
     header:"TOTAL INCOME",
     value:'3,251',
     per:'11',
     icon:"fa fa-dollar",
     data:[2,9,4,6,5,5,1,3,4,1,5,8,9,6,7,2,3,5,6,7,1,5,1,6,3,2,6,9,4,7,6],
     background:'secondary-bg'
   },
   {
     header:"TOTAL EXPENSE",
     value:'3,251',
     per:'5.2',
     icon:"fa fa-file-text-o",
     data:[2,9,4,6,5,5,1,3,4,1,5,8,9,6,7,2,3,5,6,7,1,5,1,6,3,2,6,9,4,7,6],
     background:'bg-dark'
   },
   {
     header:"NEW USER",
     value:'3,251',
     per:'3.8',
     icon:"fa fa-users",
     data:[2,9,4,6,5,5,1,3,4,1,5,8,9,6,7,2,3,5,6,7,1,5,1,6,3,2,6,9,4,7,6],
     background:'bg-info'
   },
   ]