import { useState } from "react"

export default function SignUpForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conditions, setConditions] = useState(false);
    const [newsletter, setNewsletter] = useState(false);

    return (
        <form>
            <div className="name-inputs">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
            </div>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <div className="checkbox">
                <input type="checkbox" />
                <p>I accept the conditions</p>
            </div>
            <div className="checkbox">
                <input type="checkbox" />
                <p>Sign me up for DAOS newsletter</p>
            </div> 
        </form>
    )
}