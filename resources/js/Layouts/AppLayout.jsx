import Footer from "@/Components/Footer";
import LeftSideBar from "@/Components/LeftSideBar";
import NavBar from "@/Components/NavBar";
import RightIconBar from "@/Components/RightIconBar";


export default function AppLayout({ children }) {
    return (
        <>
        <div id="wrapper" className="theme-cyan">
            {/* Page Loader */}
            <div className="page-loader-wrapper"> 
                <div className="loader">
                    <div className="m-t-30">
                        <img
                            src="../assets/images/logo-icon.svg"
                            width={48}
                            height={48}
                            alt="Iconic"
                        />
                    </div>
                    <p>Please wait...</p>
                </div>
            </div>
            <NavBar />
            <LeftSideBar />
            <RightIconBar />
            {children}
            
        </div>
        <Footer />
        </>

    );
}
