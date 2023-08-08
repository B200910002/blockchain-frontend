import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Fonts } from "../../constants/styles";
import { UserContext } from "../../context/UserContext";
import Cookies from "js-cookie";

export default function Join() {
    const { fetchSetCookie } = useContext(UserContext);
    const [username, setUsername] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchSetCookie(username);
    }

    return (
        <>
            {!Cookies.get("username") ? (<div className="caixa__login">
                <h2>Welcome</h2>
                <form onSubmit={handleSubmit}>
                    <div className="caixa__login-input">
                        <input
                            type="text"
                            required
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        <label>Username</label>
                    </div>
                    <p style={Fonts.smallGray}>enter a username to join</p>
                    <div className="d-flex justify-content-center">
                        <Link className="a" onClick={(event) => handleSubmit(event)}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Join
                        </Link>
                    </div>
                </form>
            </div>) : <>{window.location.href = "/blockchain-frontend/blockchain"}</>}
        </>
    );
}