import Hamburger from "../../comman/hamburger";
import Header from "./header";
import Homeinfo from "./homeinfo";
import Info from "./info";
import Menu from "../../comman/menu";
import Signaturedish from "./signaturedish";
import Themenu from "./themenu/themenu";
import Revervations from "../../comman/reservations";
import Footer from "../../comman/footer";

export default function Home(){
    return(
        <>
            <Header />
            <Hamburger />
            <Menu />
            <Homeinfo />
            <Info />
            <Signaturedish />
            <Themenu />
            <Revervations />
            <Footer />
        </>
    );
}