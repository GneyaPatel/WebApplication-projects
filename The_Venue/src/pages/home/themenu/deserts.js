var data=[{"name":"Lava Cake","price":"$20"},
{"name":"Orange Tart","price":"$17"},
{"name":"Cheese Cake","price":"$30"},
{"name":"Chocolatte Mausse","price":"$20"},
{"name":"Ice Cream","price":"$17"}]

export default function Deserts(){
    return(
        <>
            <div class="col-lg-4 themenu_column">
                <div class="themenu_col">
                    <div class="themenu_col_title">Deserts</div>
                    <div class="dish_list">
                    {
                        data.map(
                            (a,i)=>{
                                return <Desert name={data[i]["name"]} price={data[i]["price"]}/>
                            }
                        )
                    }
                    </div>
                </div>
            </div>
        </>
    );
}

function Desert(props){
    return(
        <>
            <div class="dish">
                <div class="dish_title_container d-flex flex-xl-row flex-column align-items-start justify-content-start">
                    <div class="dish_title">{props.name}</div>
                    <div class="dish_price">{props.price}</div>
                </div>
                <div class="dish_order">Order Now</div>
            </div>
        </>
    );
}