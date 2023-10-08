import Header from "@/Components/Common/Header";
import Leftbar from "@/Components/Common/Leftbar";
import Navbar from "@/Components/Common/Navbar";
import Rightbar from "@/Components/Common/Rightbar";
import { Head } from "@inertiajs/react";

export default function Timeline(){
    return(
        <>
        <Head title="Timeline"/>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <div id="main-content">
  <div className="container-fluid">
  <Header headerText="Timeline" mainNavigate="App" currentPage="Timeline"/>
    <div className="row clearfix">
      <div className="col-lg-12">
        <div className="card">
          <div className="body">
            <div className="timeline-item green" date-is="20-04-2018 - Today">
              <h5>
                Hello, 'Im a single div responsive timeline without media
                Queries!
              </h5>
              <span>
                <a href="javascript:void(0);">Elisse Joson</a> San Francisco, CA
              </span>
              <div className="msg">
                <p>
                  I'm speaking with myself, number one, because I have a very
                  good brain and I've said a lot of things. I write the best
                  placeholder text, and I'm the biggest developer on the web
                  card she has is the Lorem card.
                </p>
                <a href="javascript:void(0);" className="m-r-20">
                  <i className="icon-heart" /> Like
                </a>
                <a
                  role="button"
                  data-toggle="collapse"
                  href="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i className="icon-bubbles" /> Comment
                </a>
                <div className="collapse m-t-10" id="collapseExample">
                  <div className="well">
                    <form>
                      <div className="form-group">
                        <textarea
                          rows={2}
                          className="form-control no-resize"
                          placeholder="Enter here for tweet..."
                          defaultValue={""}
                        />
                      </div>
                      <button className="btn btn-primary">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="timeline-item blue"
              date-is="19-04-2018 - Yesterday"
            >
              <h5>Oeehhh, that's awesome.. Me too!</h5>
              <span>
                <a href="javascript:void(0);" title="">
                  Katherine Lumaad
                </a>{" "}
                Oakland, CA
              </span>
              <div className="msg">
                <p>
                  I'm speaking with myself, number one, because I have a very
                  good brain and I've said a lot of things. on the web by far...
                  While that's mock-ups and this is politics, are they really so
                  different? I think the only card she has is the Lorem card.
                </p>
                <div className="timeline_img m-b-20">
                  <img
                    className="w-25"
                    src="assets/images/blog/blog-page-4.jpg"
                    alt="Awesome Image"
                  />
                  <img
                    className="w-25"
                    src="assets/images/blog/blog-page-2.jpg"
                    alt="Awesome Image"
                  />
                </div>
                <a href="javascript:void(0);" className="m-r-20">
                  <i className="icon-heart" /> Like
                </a>
                <a
                  role="button"
                  data-toggle="collapse"
                  href="#collapseExample1"
                  aria-expanded="false"
                  aria-controls="collapseExample1"
                >
                  <i className="icon-bubbles" /> Comment
                </a>
                <div className="collapse m-t-10" id="collapseExample1">
                  <div className="well">
                    <form>
                      <div className="form-group">
                        <textarea
                          rows={2}
                          className="form-control no-resize"
                          placeholder="Enter here for tweet..."
                          defaultValue={""}
                        />
                      </div>
                      <button className="btn btn-primary">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item warning" date-is="21-02-2018">
              <h5>
                An Engineer Explains Why You Should Always Order the Larger
                Pizza
              </h5>
              <span>
                <a href="javascript:void(0);" title="">
                  Rose Rivera
                </a>{" "}
                San Francisco, CA
              </span>
              <div className="msg">
                <p>
                  I'm speaking with myself, number one, because I have a very
                  good brain and I've said a lot of things. I write the best
                  placeholder text, and I'm the biggest developer on the web by
                  far... While that's mock-ups and this is politics, is the
                  Lorem card.
                </p>
                <a href="javascript:void(0);" className="m-r-20">
                  <i className="icon-heart" /> Like
                </a>
                <a
                  role="button"
                  data-toggle="collapse"
                  href="#collapseExample2"
                  aria-expanded="false"
                  aria-controls="collapseExample2"
                >
                  <i className="icon-bubbles" /> Comment
                </a>
                <div className="collapse m-t-10" id="collapseExample2">
                  <div className="well">
                    <form>
                      <div className="form-group">
                        <textarea
                          rows={2}
                          className="form-control no-resize"
                          placeholder="Enter here for tweet..."
                          defaultValue={""}
                        />
                      </div>
                      <button className="btn btn-primary">Submit</button>
                    </form>
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