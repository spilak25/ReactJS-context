import { useContext } from "react";
import { UserContext } from "../UserContext";

const Footer = () => {
    const {user} = useContext(UserContext)
    return ( 
        <div className="footer">
            Utilisateur connecté: {user?.name}
        </div>
    )
}
export default Footer;