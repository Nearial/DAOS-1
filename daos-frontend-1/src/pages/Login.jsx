import { useState } from "react";
import { Link } from "react-router-dom";

import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(e) {

        e.preventDefault();

        const profile = {
            email,
            password
        }

        console.log("Login")
        console.log(profile)
    }

    return (
        <div className="login">
            <HTag hType="h1" hColor="blue" hText="Login" />
            <form onSubmit={login}>
                <input type="text" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="text" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <Link to="#"><p>Forgot password?</p></Link>
                <ButtonTag buttonColor="blue" buttonText="Login" />
            </form>
        </div>
    );
}