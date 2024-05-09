import Hamburger from "../../comman/hamburger";
import Footer from "../../comman/footer";
import Themainmenu from "./themenu/themainmenu";
import Signature from "./signature";
import Revervations from "../../comman/reservations";
import Menuhome from "./menuhome";
import Header1 from "../../comman/header1";

export default function Mainmenu(){
    return(
        <>
            <Header1 />
            <Hamburger />
            <Menuhome />
            <Themainmenu />
            <Signature />
            <Revervations/>
            <Footer />
        </>
    );
}