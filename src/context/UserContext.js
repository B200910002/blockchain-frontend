import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { CLEAR_COOKIE, GET_COOKIES, SET_COOKIE } from "../constants/config";

export const UserContext = createContext({});

export function UserProvider(props) {
    const [cookie, setCookie] = useState();

    const refresh = () => {
        setCookie(Cookies.get("username"));
    };

    useEffect(() => {
        refresh();
    }, []);

    const fetchSetCookie = (username) => {
        axios.post(SET_COOKIE, {username: username},{withCredentials: true}).then((response) => {
            alert(response.data);
        }).catch((error) => {
            alert(error.response.data);
        });
    }

    const fetchGetCookies = () => {
        axios.get(GET_COOKIES, {withCredentials: true}).then((response) => {
            setCookie(response.data)
        }).catch((error) => {
            alert(error.response.data);
        });
    }

    const fetchClearCookie = () => {
        axios.delete(CLEAR_COOKIE,{withCredentials: true}).then((response) => {
            alert(response.data)
        }).catch((error) => {
            alert(error.response.data);
        });
    }

    return (
    <UserContext.Provider value={{cookie, fetchSetCookie, fetchGetCookies, fetchClearCookie}}>
        {props.children}
    </UserContext.Provider>
    );
}