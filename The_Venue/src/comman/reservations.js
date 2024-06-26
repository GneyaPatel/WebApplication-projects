export default function Revervations(){
    return(
        <>
            <div class="reservations text-center">
		<div class="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/reservations.jpg" data-speed="0.8"></div>
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="reservations_content d-flex flex-column align-items-center justify-content-center">
						<div class="res_stars page_subtitle">5 Stars</div>
						<div class="res_title">Make a Reservation</div>
						<div class="res_form_container">
                        <form action="#" id="res_form" className="res_form">
                        <div className="d-flex flex-sm-row flex-column align-items-center justify-content-start">
                            <input type="text" id="datepicker" className="res_input" required="required" />
                            <input type="text" className="res_input timepicker" required="required" />
                            <select className="res_select">
                            <option disabled="" selected="">
                                2 person
                            </option>
                            <option>3 person</option>
                            <option>4 person</option>
                            <option>5 person</option>
                            <option>6 person</option>
                            </select>
                        </div>
                        <button className="res_button">Make a Reservation</button>
                        </form>
						</div>
					</div>
				</div>
			</div>
		</div>		
	</div>
        </>
    );
}