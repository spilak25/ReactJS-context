import { createContext, useState } from "react";
import { User } from "./types";

export type UserContextType ={
    user?:User|null;
    login:()=>void,
    logout:()=>void,
}
export const UserContext = createContext<UserContextType>({
    user:null,
    login:()=>{},
    logout:()=>{},
});


type Props = {
    children: React.ReactNode;
}
export const UserContextProvider = ({children} :Props) =>{
    const [user,setUser]=useState <User | null>(null);

    const login =()=> {
        setUser({
          name:"Raymond",
          isAdmin:true,
        })
    }

    const logout = () => {
        setUser(null);
    }
    const value = {user, login, logout};
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
      )
}