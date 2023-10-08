import Header from "@/Components/Common/Header";
import BlogImage from "../../assets/images/blog/blog-page-1.jpg";
import Avatar from "../../assets/images/sm/avatar2.jpg";
import Navbar from "@/Components/Common/Navbar";
import Leftbar from "@/Components/Common/Leftbar";
import Rightbar from "@/Components/Common/Rightbar";
import BlogDetailsMainCard from "@/Components/Apps/BlogDetailsMainCard";
import BlogCommentsCard from "@/Components/Apps/BlogCommentsCard";
import BlogReplyCard from "@/Components/Apps/BlogReplyCard";
import BlogSearchCard from "@/Components/Apps/BlogSearchCard";
import CategoriesCloudsCard from "@/Components/Apps/CategoriesCloudsCard";
import PopularPostsCard from "@/Components/Apps/PopularPostsCard";
import InstagramPostCard from "@/Components/Apps/InstagramPostCard";
import EmailNewsletterCard from "@/Components/Apps/EmailNewsletterCard";
import imageBlog1 from "../../assets/images/blog/blog-page-3.jpg";
export default function BLogDetails(){
    return(
        <>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content" class="blog-page">
        <div class="container-fluid">
        <Header headerText="Blog Detail" mainNavigate="Dashboard" currentPage="Blog Detail" />

        <div className="row clearfix">
                <div className="col-lg-8 col-md-12 left-box">
                        <BlogDetailsMainCard imageUrl={imageBlog1}/>
                        <BlogCommentsCard />
                        <BlogReplyCard />
                    
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