import { createContext, FC, useEffect, useState } from "react";
import { API } from '../uteis/api';


const MyContext = createContext("");


export const Auth = ({ children }) => {


    const [usuario, setUser] = useState({});


    const login = async (user) => {
        debugger;
        await API.login(user).then((e)=>{
            localStorage.setItem("user",JSON.stringify(e.data));
            window.location.href = "/";
        }).catch((e)=>{
            alert("Usuario ou senha incorretos!");
        });

    }

    return (<MyContext.Provider value={{ usuario, setUser, login }}>{children}</MyContext.Provider>);
}

export default MyContext;