import BlogImage from "../../assets/images/blog/blog-page-1.jpg";
import BlogImage2 from "../../assets/images/blog/blog-page-3.jpg";
import BlogImage3 from "../../assets/images/blog/05-img.jpg";
import Header from "@/Components/Common/Header";
import Navbar from "@/Components/Common/Navbar";
import Leftbar from "@/Components/Common/Leftbar";
import Rightbar from "@/Components/Common/Rightbar";
import BlogListMainCard from "@/Components/Apps/BlogListMainCard";
import BlogSearchCard from "@/Components/Apps/BlogSearchCard";
import CategoriesCloudsCard from "@/Components/Apps/CategoriesCloudsCard";
import PopularPostsCard from "@/Components/Apps/PopularPostsCard";
import InstagramPostCard from "@/Components/Apps/InstagramPostCard";
import EmailNewsletterCard from "@/Components/Apps/EmailNewsletterCard";
export default function BlogList(){
    return(
        <>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content" class="blog-page">
        <div class="container-fluid">
        <Header headerText="Blog List" mainNavigate="Dashboard" currentPage="Blog List" />
        <div className="row clearfix">
                <div className="col-lg-8 col-md-12 left-box">
                    {
                        blogListMainCardData.map((data,i)=>{
                            return <BlogListMainCard
                                        imageUrl={data.imageUrl}
                                     />
                        })
                    }
                    <ul className="pagination pagination-primary">
                        <li className="page-item"><a className="page-link" href="javascript:void(0);">Previous</a></li>
                        <li className="page-item active"><a className="page-link" href="javascript:void(0);">1</a></li>
                        <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
                        <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
                        <li className="page-item"><a className="page-link" href="javascript:void(0);">Next</a></li>
                    </ul>
                    
                </div>
                <div className="col-lg-4 col-md-12 right-box">
                    <BlogSearchCard />
                    <CategoriesCloudsCard />
                    <PopularPostsCard />
                    <InstagramPostCard />
                    <EmailNewsletterCard />
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

const blogListMainCardData = [
    {
      imageUrl:BlogImage
    },
    {
      imageUrl:BlogImage2
    },
    {
      imageUrl:BlogImage3
    },
    {
      imageUrl:BlogImage
    }
  ]