var data =[{"name":"Maria Smith","img":"images/chef_1.jpg","title":"Top Chef"},
{"name":"William Jones","img":"images/chef_2.jpg","title":"Sauce Chef"},
{"name":"Julien Williams","img":"images/chef_3.jpg","title":"Sushi Chef"},
{"name":"Suzie James","img":"images/chef_4.jpg","title":"Sauce Chef"}]

export default function Chefs(){
    return(
        <>
            	<div class="chefs">
					<div class="container">
						<div class="row">
							<div class="col">
								<div class="section_title_container">
									<div class="section_subtitle page_subtitle">Let's connect with cook</div>
									<div class="section_title"><h1>Meet the Chefs</h1></div>
								</div>
							</div>
						</div>
						<div class="row chefs_text_row">
							<div class="col-lg-6">
								<div class="chefs_text">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla.</p>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="chefs_text">
									<p>Sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla.</p>
								</div>
							</div>
						</div>
						<div class="row chefs_row row-eq-height">
							
							{
								data.map(
									(a,i)=>{
										return <Chef img={data[i]["img"]} name={data[i]["name"]} title={data[i]["title"]}/>
									}
								)
							}
						</div>
					</div>
				</div>
        </>
    );
}

function Chef(props){
	return(
		<>
			<div class="col-xl-3 col-md-6 chef_col d-flex flex-column align-items-center justify-content-end">
								<div class="chef">
									<div class="chef_image"><img src={props.img} alt=""/></div>
									<div class="chef_content text-center">
										<div class="chef_name">{props.name}</div>
										<div class="chef_subtitle">{props.title}</div>
										<div class="chef_button ml-auto mr-auto trans_400">see more</div>
									</div>
								</div>
							</div>
		</>
	);
}