var data=[{"title":"Sahi Panner","price":"$20","ing1":"Panner","ing2":"Curd","ing3":"vaggies"},
            {"title":"Matar Panner","price":"$25","ing1":"Panner","ing2":"Green Peas","ing3":"Spices"},
            {"title":"Kaju curry masala","price":"$20","ing1":"Cashew","ing2":"Curd","ing3":"Spices"},
            {"title":"Panner Butter Masala","price":"$30","ing1":"Panner","ing2":"Cashew","ing3":"spices"},
            {"title":"Malai Kofta","price":"$30","ing1":"Potato","ing2":"Cheese","ing3":"Vaggies"},
            {"title":"Palak Panner","price":"$30","ing1":"Panner","ing2":"Spinich","ing3":"Spices"}]

export default function Menus(){
    return(
        <>
            <div class="col-lg-4 themenu_column">
                <div class="themenu_col">
                    <div class="themenu_col_title">Main</div>
                    <div class="dish_list">
                    {
                        data.map(
                            (a,i)=>{
                                return<Mainmenu title={data[i]["title"]} price={data[i]["price"]} ing1={data[i]["ing1"]} ing2={data[i]["ing2"]} ing3={data[i]["ing3"]}/>
                            }
                        )
                    }
                    </div>
                </div>
            </div> 
        </>
    );
}

function Mainmenu(props){
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