import { Link, useNavigate } from "react-router-dom";

import toggleOpen from "../../img/toggle-open.svg";
import toggleClose from "../../img/toggle-close.svg";

import ButtonTag from "../atoms/ButtonTag";
import HTag from "../atoms/HTag";
import PTag from "../atoms/PTag";
import LabelTag from "../atoms/LabelTag";

export default function Header() {

    const navigate = useNavigate();

    function goToSignUp() {
        navigate("/sign-up");
    }

    function goToLogin() {
        navigate("/login");
    }

    return (
        <header>
            <div className="header-logo">
                <HTag hType="h3" hColor="red" hText="Music interaction" />
                <PTag pType="small" pColor="grey" pText="Created by DAOS - Danish Amateur Orchestra Association" />
            </div>
            <div className="header-toggle">
                <div className="toggle-open">
                    <img src={toggleOpen} alt="Toggle open" />
                </div>
                <div className="toggle-close">
                    <img src={toggleClose} alt="Toggle close" />
                </div>
            </div>
            <div className="header-navigation">
                <nav>
                    <Link to="/">
                        <LabelTag labelType="normal" labelColor="blue" labelLink="link" labelText="Home" />
                    </Link>
                    <Link to="/find-musician">
                        <LabelTag labelType="normal" labelColor="blue" labelLink="link" labelText="Find musician" />
                    </Link>
                    <Link to="/find-ensemble">
                        <LabelTag labelType="normal" labelColor="blue" labelLink="link" labelText="Find ensemble" />
                    </Link>
                    <Link to="/profile">
                        <LabelTag labelType="normal" labelColor="blue" labelLink="link" labelText="Profile" />
                    </Link>
                </nav>
                <div className="header-navigation-buttons">
                    <ButtonTag buttonFunction={goToSignUp} buttonColor="blue" buttonText="Sign up" />
                    <ButtonTag buttonFunction={goToLogin} buttonColor="white" buttonText="Login" />
                </div>
            </div>
        </header>
    );
}