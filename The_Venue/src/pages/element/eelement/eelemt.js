import AccordionsTabs from "./accordions";
import Icon from "./icone";
import Milestone from "./milestone";

export default function Eelemet(){
    return(
        <>
            <div class="elements">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="buttons">
						 <div class="elements_title">Buttons</div>
						 <div class="buttons_container d-flex flex-row align-items-start justify-content-start flex-wrap">
						 	<div class="button button_1">Make a Reservation</div>
						 	<div class="button button_2">Make a Reservation</div>
						 	<div class="button button_3">Make a Reservation</div>
						 </div>
					</div>

					<AccordionsTabs />
					<Milestone/>
					<Icon/>

        				{/* <div class="loaders">
						<div class="elements_title">Loaders</div>
						<div class="row loaders_row">
							<div class="col-xl-3 col-md-6 loader_col">
								<div class="loader_container text-center">
									<div class="loader text-center" data-perc="0.80"></div>
									<div class="loader_content">
										<div class="loader_title">Deserts</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-md-6 loader_col">
								<div class="loader_container text-center">
									<div class="loader text-center" data-perc="0.20"></div>
									<div class="loader_content">
										<div class="loader_title">Pasta</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-md-6 loader_col">
								<div class="loader_container text-center">
									<div class="loader text-center" data-perc="1.00"></div>
									<div class="loader_content">
										<div class="loader_title">Perfect</div>
									</div>
								</div>
							</div>

							<div class="col-xl-3 col-md-6 loader_col">
								<div class="loader_container text-center">
									<div class="loader text-center" data-perc="0.95"></div>
									<div class="loader_content">
										<div class="loader_title">Main Courses</div>
									</div>
								</div>
							</div>

						</div>
						</div> */}
				</div>
			</div>
		</div>
	</div>
        </>
    );
}