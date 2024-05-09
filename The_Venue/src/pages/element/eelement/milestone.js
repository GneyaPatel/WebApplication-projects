var data=[{"img":"images/icon_1.png","value":"129","name":"Awards"},
{"img":"images/icon_2.png","value":"75","name":"New Articles"},
{"img":"images/icon_3.png","value":"36","name":"ANew Projects"},
{"img":"images/icon_4.png","value":"52","name":"Followers"}]

export default function Milestone(){
    return(
        <>
            <div class="milestones">
						<div class="elements_title">Milestones</div>
						<div class="row milestones_row">
							{
                                data.map(
                                    (a,i)=>{
                                        return <Mile value={data[i]["value"]} name={data[i]["name"]} img={data[i]["img"]}/>
                                    }
                                )
                            }
						</div>
					</div>
        </>
    );
}

function Mile(props){
    return(
        <>
            <div class="col-xl-3 col-md-6 milestone_col">
			    <div class="milestone d-flex flex-row align-items-end justify-content-md-center justify-content-start">
				    <div class="milestone_icon d-flex flex-column align-items-center justify-content-end"><img src={props.img} alt=""/></div>
				    <div class="milestone_content">
					    <div class="milestone_counter" data-end-value={props.value}>0</div>
					    <div class="milestone_text">{props.name}</div>
				    </div>
			    </div>
		    </div>
        </>
    );
}