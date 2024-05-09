import Footer from "../../comman/footer";
import Hamburger from "../../comman/hamburger";
import Header1 from "../../comman/header1";
import Menu from "../../comman/menu";
import Revervations from "../../comman/reservations";
import Blogblog from "./blogblog";
import Bloghome from "./bloghome";

export default function Blog(){
    return(
        <>
            <Header1 />
            <Hamburger/>
            <Menu />
            <Bloghome/>
            <Blogblog />
            <Revervations />
            <Footer/>
        </>
    );
}