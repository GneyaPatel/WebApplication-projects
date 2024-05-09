var data =[{"img":"images/blog_1.jpg","date":"June 18, 2018","title":"Our Nomenee at the Restaurants Awards","by":"George Smith","in":"Lifestyle","extra":"","desc":"2 Comments"},
{"img":"images/blog_2.jpg","date":"June 18, 2018","title":"Recipe of the week","by":"George Smith","in":"Lifestyle","extra":"","desc":"2 Comments"},
{"img":"images/blog_3.jpg","date":"June 18, 2018","title":"Our Nomenee at the Restaurants Awards","by":"George Smith","in":"Lifestyle","extra":"","desc":"2 Comments"},
{"img":"images/blog_4.jpg","date":"June 18, 2018","title":"Our Nomenee at the Restaurants Awards","by":"George Smith","in":"Lifestyle","extra":"","desc":"2 Comments"},
{"img":"images/blog_5.jpg","date":"June 18, 2018","title":"Our Nomenee at the Restaurants Awards","by":"George Smith","in":"Lifestyle","extra":"","desc":"2 Comments"},
{"img":"images/blog_6.jpg","date":"June 18, 2018","title":"Our Nomenee at the Restaurants Awards","by":"George Smith","in":"Lifestyle","extra":"","desc":"2 Comments"}]

export default function Blogblog(){
    return(
        <>
            <div class="blog">
                <div class="container">
                    <div class="row">
                        {
                            data.map(
                                (a,i)=>{
                                    return < Bb img={data[i]["img"]} title={data[i]["title"]} by={data[i]["by"]} date={data[i]["date"]} in={data[i]["in"]} desc={data[i]["desc"]} extra={data[i]["extra"]}/>
                                }
                            )
                        }

                    </div>
                    <div class="row load_more_row">
                        <div class="col">
                            <div class="button load_more_button ml-auto mr-auto trans_200">Load More</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Bb(props){
    return(
        <>
            <div class="col-lg-6 blog_col">
                            <div class="blog_post">
                                <div class="blog_post_image_container">
                                    <div class="blog_post_image"><img src={props.img} alt=""/></div>
                                    <div class="blog_post_date">{props.date}</div>
                                </div>
                                <div class="blog_post_content">
                                    <div class="blog_post_title">{props.title}</div>
                                    <div class="blog_post_info">
                                        <ul class="d-flex flex-row align-items-center justify-content-start">
                                            <li>by {props.by}</li>
                                            <li>in {props.in}</li>
                                            <li>{props.extra}</li>
                                        </ul>
                                    </div>
                                    <div class="blog_post_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    );
}