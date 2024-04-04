import Item from "./Item"
import { Cheese } from "../types";

type Props = {
    cheeses: Cheese[]
}
const ItemList = ({cheeses}:Props)=> {
    
        return (<div className="itemList">
            {
                cheeses.map((cheese,index)=>(<Item key={index}cheese={cheese}/>))
            }
    </div>)
}
export default ItemList