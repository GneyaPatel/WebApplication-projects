var data=[{"acco":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti."},
{"acco":"Morbi in urna commodo, cursus ante at, facilisis augue","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti."},
{"acco":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti."}]

export default function AccordionsTabs(){
    return(
        <>
            <div class="accordions_and_tabs">
				<div class="elements_title">Accordions & Tabs</div>
				<div class="row accordions_and_tabs_row">
				    <div class="col-lg-6">
								
								<div class="accordions">
                                    {
                                        data.map(
                                            (a,i)=>{
                                                return <Acco desc={data[i]["desc"]} acco={data[i]["acco"]}/>
                                            }
                                        )
                                    }
								</div>
				    </div>

					<div class="col-lg-6">
								<div class="tabs">
									<div class="tabs d-flex flex-row align-items-center justify-content-start flex-wrap">
										<div class="tab active">Lorem ipsum dolor</div>
										<div class="tab">Morbi in urna</div>
										<div class="tab">Lorem ipsum</div>
									</div>
									<div class="tab_panels">
										<div class="tab_panel active">
											<div class="tab_panel_content d-flex flex-row align-items-start justify-content-start">
												<div><div class="tab_image"><img src="images/tab.jpg" alt=""/></div></div>
												<div class="tab_text">
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti.</p>
												</div>
											</div>
										</div>
										<div class="tab_panel">
                                            {
                                                data.map(
                                                (a,i)=>{
                                                        return <Tab desc={data[i]["desc"]}/>
                                                    }
                                                )
                                            }
										</div>
										<div class="tab_panel">
											<div class="tab_panel_content">
												<div class="tab_text">
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti.</p>
												</div>
											</div>
										</div>
									</div>
								</div>

					</div>

				</div>
			</div>
        </>
    );
}

function Acco(props){
    return(
        <>
            <div class="accordion_container">
			    <div class="accordion d-flex flex-row align-items-center active"><div>{props.acco}</div></div>
			    <div class="accordion_panel">
				    <div>
					    <p>{props.desc}</p>
				    </div>
			    </div>
		    </div>
        </>
    );
}

function Tab(props){
    return(
        <>
            <div class="tab_panel_content">
			<div class="tab_text">
				<p>{props.desc}</p>
			</div>
			</div>
        </>
    );
}