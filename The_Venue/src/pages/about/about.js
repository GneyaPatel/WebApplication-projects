import Hamburger from "../../comman/hamburger";
import Footer from "../../comman/footer";
import Menu from "../../comman/menu";
import Abouthome from "./abouthome";
import Intro from "./intro";
import Chefs from "./chefs";
import Revervations from "../../comman/reservations";
import Header1 from "../../comman/header1";

export default function About(){
    return(
        <>
            <Header1 />
            <Hamburger />
            <Menu />
            <Abouthome />
            <Intro />
            <Chefs />
            <Revervations />
            <Footer />
        </>
    );
}