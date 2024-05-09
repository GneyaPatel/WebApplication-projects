var data=[{"img":"images/icon_5.png","title":"Top Chefs","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien."},
{"img":"images/icon_6.png","title":"The best dishes","desc":"Scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio."},
{"img":"","title":"Beautiful Atmosphere","desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien."}]

export default function Icon(){
    return(
        <>
            <div class="icon_boxes">
			    <div class="elements_title">Icon Boxes</div>
			    <div class="row icon_boxes_row">
							{
                                data.map(
                                    (a,i)=>{
                                        return <Ic title={data[i]["title"]} desc={data[i]["desc"]} img={data[i]["img"]}/>
                                    }
                                )
                            }
			    </div>
		    </div>
        </>
    );
}
function Ic(props){
    return(
        <>
            <div class="col-lg-4 icon_box_col">
			    <div class="icon_box">
				    <div class="icon_box_title_container d-flex flex-row align-items-center justify-content-start">
					    <div class="icon_box_icon d-flex flex-column align-items-start justify-content-center"><img src={props.img} alt=""/></div>
					    <div class="icon_box_title">{props.title}</div>
				    </div>
				    <div class="icon_box_text">
					    <p>{props.desc}</p>
				    </div>
			    </div>
		    </div>
        </>
    );
}