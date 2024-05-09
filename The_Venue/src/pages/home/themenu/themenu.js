import Starters from "./starters";
import Deserts from "./deserts";
import Menus from "./menu";

export default function Themenu(){
    return(
        <>
            <div class="themenu">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="themenu_title_bar_container">
                                <div class="themenu_stars text-center page_subtitle">5 Stars</div>
                                <div class="themenu_rating text-center">
                                    <div class="rating_r rating_r_5"><i></i><i></i><i></i><i></i><i></i></div>
                                </div>
                                <div class="themenu_title_bar d-flex flex-column align-items-center justify-content-center">
                                    <div class="themenu_title">The Menu</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row themenu_row">

                        <Starters/>
                        <Menus/>
                        <Deserts/>

                    </div>
                </div>		
            </div>
        </>
    );
}