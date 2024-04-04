import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Cheese } from "../types";

type Props = {
    cheese: Cheese
}

const Item = ({cheese}:Props) =>{
    const {user} = useContext(UserContext);

    if (cheese.isAdmin && !user?.isAdmin) return <></>
    return (
        <div className="item">
            <span>{cheese.name}</span>
            <img src={cheese.photo} width={200}/>
        </div>
    )

}
export default Item