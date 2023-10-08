import { Image } from "react-bootstrap";

export default function PreLoader(){
    return(
        <div class="page-loader-wrapper">
        <div class="loader">
            <div class="m-t-30">
                {/* <Image src="assets/images/logo-icon.svg" width="48" height="48" alt="Iconic"> */}
            </div>
            <p>Please wait...</p>
        </div>
        </div>
    )
}