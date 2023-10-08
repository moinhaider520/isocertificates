import Header from "@/Components/Common/Header";
import Leftbar from "@/Components/Common/Leftbar";
import Navbar from "@/Components/Common/Navbar";
import Rightbar from "@/Components/Common/Rightbar";
import { CKEditor } from "ckeditor4-react";

export default function BlogPost(){
    return(
        <>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content">
        <div class="container-fluid">
        <Header headerText="Blog Post" mainNavigate="Dashboard" currentPage="Blog Post" />

            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="body">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Enter Blog title" />
                            </div>
                            <select class="form-control show-tick">
                                <option>Select Category</option>
                                <option>Web Design</option>
                                <option>Photography</option>
                                <option>Technology</option>
                                <option>Lifestyle</option>
                                <option>Sports</option>
                            </select>
                            <div class="form-group m-t-20 m-b-20">
                                <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                                <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                            </div>
                            <CKEditor
                            data="  <h1>hi,</h1><h2>we are Summernote</h2>"
                             />
                            <button type="button" class="btn btn-block btn-primary   m-t-20">Post</button>
                        </div>
                    </div>
                </div>            
            </div>

        </div>
    </div>
    </>
    )
}