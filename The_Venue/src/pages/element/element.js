import Footer from "../../comman/footer";
import Hamburger from "../../comman/hamburger";
import Header1 from "../../comman/header1";
import Revervations from "../../comman/reservations";
import Elementhome from "./elementhome";
import Eelemet from "./eelement/eelemt"


export default function Element(){
    return(
        <>
            <Header1/>
            <Hamburger />
            <Elementhome />
            <Eelemet />
            <Revervations/>
            <Footer/>
        </>
    );
}