import ItemList from "./Itemlist";
import { Cheese } from "../types";

type Props = {
    cheeses: Cheese[]
}

const ItemScreen =({cheeses}:Props)=>{
    return(
    <div>
        <ItemList cheeses={cheeses}/>
    </div>
    )
}
export default ItemScreen