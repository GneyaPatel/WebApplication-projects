var data =[{"img":"images/intro_1.jpg"},{"img":"images/intro_2.jpg"}]

export default function Info(){
    return(
        <>
            <div class="intro">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="intro_content">
                                <div class="intro_subtitle page_subtitle"></div>
                                <div class="intro_title"><h2>Flavors for royalty</h2></div>
                                <div class="intro_text">
                                    <p>Where every flavor tells a story..</p>
                                </div>
                            </div>
                            <div class="row">
                                {
                                    data.map(
                                        (a,i)=>{
                                            return<In img={data[i]["img"]}/>
                                        }
                                    )
                                }
                            </div>
                        </div>	
                    </div>
                </div>
            </div>
        </>
    );
}

function In(props){
    return(
        <>
            <div class="col-xl-4 col-md-6 intro_col">
                <div class="intro_image"><img src={props.img} alt="https://unsplash.com/@quanle2819"/></div>
            </div>
        </>
    );
}