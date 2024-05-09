var data=[{"title":"Panner tikka","price":"$20","ing1":"Panner","ing2":"Vaggies","ing3":"Marination"},
            {"title":"Veg crispy","price":"$25","ing1":"Panner","ing2":"Vaggies","ing3":"Olive oil"},
            {"title":"Spring Roll","price":"$20","ing1":"Panner","ing2":"Vaggies","ing3":"Cheese"},
            {"title":"Broccoli almond soup","price":"$30","ing1":"Broccoli","ing2":"Vaggies","ing3":"Almond"}]

export default function Starters(){
    return(
        <>
            <div class="col-lg-4 themenu_column">
                <div class="themenu_col">
                    <div class="themenu_col_title">Starters</div>
                    <div class="dish_list">
                        {
                            data.map(
                                (a,i)=>{
                                    return<Starter title={data[i]["title"]} price={data[i]["price"]} ing1={data[i]["ing1"]} ing2={data[i]["ing2"]} ing3={data[i]["ing3"]}/>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

function Starter(props){
    return(
        <>
             <div class="dish">
                <div class="dish_title_container d-flex flex-xl-row flex-column align-items-start justify-content-start">
                    <div class="dish_title">{props.title}</div>
                    <div class="dish_price">{props.price}</div>
                </div>
                <div class="dish_contents">
                    <ul class="d-flex flex-row align-items-start justify-content-start flex-wrap">
                        <li>{props.ing1}</li>
                        <li>{props.ing2}</li>
                        <li>{props.ing3}</li>
                    </ul>
                </div>
                <div class="dish_order">Order Now</div>
            </div>
        </>
    );
}