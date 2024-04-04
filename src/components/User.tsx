import { UserContext } from "../UserContext";
import { useContext } from "react"

const User= ()=> {
    const { user, login, logout } = useContext(UserContext)
    if (user) {
        return (
            <button onClick={logout}>Se deconnecter</button>
        )
    } 
    return (
        <button onClick={login}>Se connecter</button>
    )
}
export default User