import { useState } from "react";

import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import PTag from "../components/atoms/PTag";

export default function SignUp() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conditions, setConditions] = useState(false);
    const [newsletter, setNewsletter] = useState(false);

    function signUp(e) {
        
        e.preventDefault();
        
        const newProfile = {
            firstName,
            lastName,
            email,
            password,
            conditions,
            newsletter
        }

        console.log("Sign up")
        console.log(newProfile)
    }

    return (
        <div className="sign-up">
            <HTag hType="h1" hColor="blue" hText="Sign up" />
            <form onSubmit={signUp}>
                <input type="text" placeholder="First name" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                <input type="text" placeholder="Last name" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                <input type="text" placeholder="E-mail" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="text" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <div className="checkbox">
                    <input type="checkbox" onChange={(e) => { setConditions(e.target.checked) }} />
                    <PTag pType="small" pColor="grey" pText="I accept the conditions" />
                </div>
                <div className="checkbox">
                    <input type="checkbox" onChange={(e) => { setNewsletter(e.target.checked) }} />
                    <PTag pType="small" pColor="grey" pText="Sign me up for DAOS newsletter" />
                </div>
                <ButtonTag buttonColor="blue" buttonText="Sign up" />
            </form>
        </div>
    );
}