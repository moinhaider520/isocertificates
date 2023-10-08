import { Head } from "@inertiajs/react";
import Avatar from "../../assets/images/sm/avatar1.jpg";
import Header from "@/Components/Common/Header";
import Navbar from "@/Components/Common/Navbar";
import Leftbar from "@/Components/Common/Leftbar";
import Rightbar from "@/Components/Common/Rightbar";
export default function Testimonials(){
    return(
        <>
        <Head title="Testimonials"/>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content">
        <div class="container-fluid">
        <Header headerText="Testimonials" mainNavigate="App" currentPage="Testimonials"/>

            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="body">
                            <div class="row">
                                <div class="col-lg-4 col-md-12">
                                    <div class="testimonial4">
                                        <div class="active item">
                                            <blockquote class="danger"><p>Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.</p></blockquote>
                                            <div class="carousel-info">
                                            <img class="rounded-circle float-left" src={Avatar} alt=""/>
                                            <div class="float-left">
                                                <h6 class="mb-0 m-t-5">Lina Mars</h6>
                                                <span>Web Designer</span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12">
                                    <div class="testimonial4">
                                        <div class="active item">
                                            <blockquote class="primary"><p>Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.</p></blockquote>
                                            <div class="carousel-info">
                                            <img class="rounded-circle float-left" src={Avatar} alt=""/>
                                            <div class="float-left">
                                                <h6 class="mb-0 m-t-5">Orlando Lentz</h6>
                                                <span>Commercial Director</span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12">
                                    <div class="testimonial4">
                                        <div class="active item">
                                            <blockquote class="info"><p>Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.</p></blockquote>
                                            <div class="carousel-info">
                                            <img class="rounded-circle float-left" src={Avatar} alt=""/>
                                            <div class="float-left">
                                                <h6 class="mb-0 m-t-5">Lina Mars</h6>
                                                <span>Front End Developer</span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12">
                                    <div class="testimonial4">
                                        <div class="active item">
                                            <blockquote class="warning"><p>Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.</p></blockquote>
                                            <div class="carousel-info">
                                            <img class="rounded-circle float-left" src={Avatar} alt=""/>
                                            <div class="float-left">
                                                <h6 class="mb-0 m-t-5">Robert Hammer</h6>
                                                <span>Commercial Director</span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <div class="testimonial4">
                                                    <div class="active item">
                                                        <blockquote class="warning"><p>Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.</p></blockquote>
                                                        <div class="carousel-info">
                                                        <img class="rounded-circle float-left" src={Avatar} alt=""/>
                                                        <div class="float-left">
                                                            <h6 class="mb-0 m-t-5">Robert Hammer</h6>
                                                            <span>Commercial Director</span>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="testimonial4">
                                                    <div class="active item">
                                                        <blockquote class="info"><p>Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.</p></blockquote>
                                                        <div class="carousel-info">
                                                        <img class="rounded-circle float-left" src={Avatar} alt=""/>
                                                        <div class="float-left">
                                                            <h6 class="mb-0 m-t-5">Lina Mars</h6>
                                                            <span>Front End Developer</span>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="testimonial4">
                                                    <div class="active item">
                                                        <blockquote class="primary"><p>Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.</p></blockquote>
                                                        <div class="carousel-info">
                                                        <img class="rounded-circle float-left" src={Avatar} alt=""/>
                                                        <div class="float-left">
                                                            <h6 class="mb-0 m-t-5">Orlando Lentz</h6>
                                                            <span>Commercial Director</span>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-3 col-md-6">
                    <div class="card testimonials">
                        <div class="body">
                            <i class="fa fa-quote-left"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  took a galley of type and scrambled it to make a type specimen book.</p>
                            <div class="m-t-30">
                                <img class="media-object rounded-circle shadow" src={Avatar} alt=""/>
                                <h6 class="mb-0 m-t-10">Steve Jobs</h6>
                                <span>CEO, Apple inc</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card testimonials">
                        <div class="body">
                            <i class="fa fa-quote-left"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  took a galley of type and scrambled it to make a type specimen book.</p>
                            <div class="m-t-30">
                                <img class="media-object rounded-circle shadow" src={Avatar} alt=""/>
                                <h6 class="mb-0 m-t-10">Pamela Petrus</h6>
                                <span>CEO, Apple inc</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card testimonials">
                        <div class="body">
                            <i class="fa fa-quote-left"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  took a galley of type and scrambled it to make a type specimen book.</p>
                            <div class="m-t-30">
                                <img class="media-object rounded-circle shadow" src={Avatar} alt=""/>
                                <h6 class="mb-0 m-t-10">Orlando Lentz</h6>
                                <span>CEO, Apple inc</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card testimonials">
                        <div class="body">
                            <i class="fa fa-quote-left"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  took a galley of type and scrambled it to make a type specimen book.</p>
                            <div class="m-t-30">
                                <img class="media-object rounded-circle shadow" src={Avatar} alt=""/>
                                <h6 class="mb-0 m-t-10">Barbara Kelly</h6>
                                <span>CEO, Apple inc</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="body">
                            <div class="row clearfix">
                                <div class="col-lg-6 col-md-12">
                                    <div class="testimonial2 default">
                                        <div class="testimonial-section">
                                            Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.
                                        </div>
                                        <div class="testimonial-desc">
                                            <img class="media-object rounded-circle shadow" src={Avatar} alt=""/>
                                            <div class="testimonial-writer">
                                                <h6>Zahed Kamal</h6>
                                                <span>Front End Developer</span>
                                                <p><a href="javascript:void(0);">Touch Base Inc</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="testimonial2 primary">
                                        <div class="testimonial-section">
                                            Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.
                                        </div>
                                        <div class="testimonial-desc">
                                            <img class="media-object rounded-circle shadow" src={Avatar} alt=""/>
                                            <div class="testimonial-writer">
                                                <h6>Rose Rivera</h6>
                                                <span>Web Designer</span>
                                                <p><a href="javascript:void(0);">Wraptech Inc</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div class="row clearfix">
                                <div class="col-lg-6 col-md-12">
                                    <div class="testimonial3 default">
                                        <div class="testimonial-section">
                                            Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.
                                        </div>
                                        <div class="testimonial-desc">
                                            <img class="media-object rounded-circle shadow" src={Avatar} alt=""/>
                                            <div class="testimonial-writer">
                                                <h6>Zahed Kamal</h6>
                                                <span>Front End Developer</span>
                                                <p><a href="javascript:void(0);">Touch Base Inc</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="testimonial3 primary">
                                        <div class="testimonial-section">
                                            Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.
                                        </div>
                                        <div class="testimonial-desc">
                                            <img class="media-object rounded-circle shadow" src={Avatar} alt=""/>
                                            <div class="testimonial-writer">
                                                <h6>Rose Rivera</h6>
                                                <span>Web Designer</span>
                                                <p><a href="javascript:void(0);">Wraptech Inc</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="testimonial3 warning">
                                        <div class="testimonial-section">
                                            Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.
                                        </div>
                                        <div class="testimonial-desc">
                                            <img class="media-object rounded-circle shadow" src={Avatar} alt=""/>
                                            <div class="testimonial-writer">
                                                <h6>Frank Camly</h6>
                                                <span>Angular Developer</span>
                                                <p><a href="javascript:void(0);">ABC Base Inc</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <div class="testimonial3 danger">
                                        <div class="testimonial-section">
                                            Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.
                                        </div>
                                        <div class="testimonial-desc">
                                            <img class="media-object rounded-circle shadow" src={Avatar} alt=""/>
                                            <div class="testimonial-writer">
                                                <h6>Rose Rivera</h6>
                                                <span>ASP MVC</span>
                                                <p><a href="javascript:void(0);">ThemeTech Inc</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}