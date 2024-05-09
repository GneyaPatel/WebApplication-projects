import Footer from "../../comman/footer";
import Hamburger from "../../comman/hamburger";
import Header1 from "../../comman/header1";
import Revervations from "../../comman/reservations";
import Ccontact from "./ccontect";
import Contacthome from "./contacthome";

export default function Contact(){
    return(
        <>
            <Header1 />
            <Hamburger/>
            <Contacthome/>
            <Ccontact />
            <Revervations />
            <Footer />
        </>
    );
}