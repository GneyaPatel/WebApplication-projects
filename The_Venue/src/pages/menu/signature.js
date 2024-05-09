var data =[{"img":"images/sig_1.jpg","signame":"Panner marinated in Green Pepper","charge":"$20","ing1":"Panner","ing2":"Spices","ing3":"Grren Papper","ing4":"Vaggies"},
			{"img":"images/sig_2.jpg","signame":"Hummus","charge":"$20","ing1":"Chickpeas bean","ing2":"Oliveoil","ing3":"Cumin","ing4":"Tahini"},
			{"img":"images/sig_3.jpg","signame":"Sahi Panner","charge":"$20","ing1":"Panner","ing2":"Spices","ing3":"Cheese","ing4":"Vaggies"}]

export default function Signature(){
    return(
        <>
            <div class="sig">
				<div class="container">
					<div class="row">
						<div class="col">
							<div class="section_title_container">
								<div class="section_subtitle page_subtitle">Must try</div>
								<div class="section_title"><h1>Our Signature Dishes</h1></div>
							</div>
						</div>
					</div>
					<div class="row sig_row">
						<div class="col">
							{
								data.map(
									(a,i)=>{
										return <Sign img={data[i]["img"]} signame={data[i]["signame"]} charge={data[i]["charge"]} ing1={data[i]["ing1"]} ing2={data[i]["ing2"]} ing3={data[i]["ing3"]} ing4={data[i]["ing4"]}/>
									}
								)
							}
						</div>
					</div>
				</div>
			</div>
        </>
    );
}

function Sign(props){
	return(
		<>
			<div class="sig_dish">
				<div class="row row-eq-height">
					<div class="col-lg-6 sig_col d-flex flex-column align-items-start justify-content-center">
						<div class="sig_content">
							<div class="rating_r sig_rating rating_r_5"><i></i><i></i><i></i><i></i><i></i></div>
							<div class="sig_name_container d-flex flex-row align-items-start justify-content-start">
								<div class="sig_name">{props.signame}</div>
								<div class="sig_price ml-auto">{props.charge}</div>
							</div>
							<div class="sig_content_list">
								<ul class="d-flex flex-row align-items-center justify-content-start">
									<li>{props.ing1}</li>
									<li>{props.ing2}</li>
									<li>{props.ing3}</li>
									<li>{props.ing4}</li>
								</ul>
							</div>
							<div class="button sig_button trans_200">Order Now</div>
						</div>
					</div>
					<div class="col-lg-6 sig_col">
						<div class="sig_image"><img src={props.img} alt=""/></div>
					</div>
				</div>
			</div>
		</>
	);
}