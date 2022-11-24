import { useNavigate } from "react-router-dom";

import welcomeIllustration from "../img/welcome-illustration.svg";

import FindButtons from "../components/others/FindButtons";
import HTag from "../components/atoms/HTag";
import PTag from "../components/atoms/PTag";
import ButtonTag from "../components/atoms/ButtonTag";

export default function Welcome() {

    const navigate = useNavigate();

    function goToCompleteProfile() {
        navigate("/complete-profile");
    }

    const profile = {
        firstName: "Hans"
    }

    return (
        <div className="loggedIn">
            <div className="welcome-intro">
                <HTag hType="h1" hColor="blue" hText={`Welcome ${profile.firstName}!`} />
                <PTag pType="normal" pColor="grey" pText="Add the instruments you can play to complete your profile." />
                <ButtonTag buttonFunction={goToCompleteProfile} buttonColor="blue" buttonText="Complete profile" />
                <FindButtons />
            </div>
            <div className="welcome-illustration">
                <img src={welcomeIllustration} alt="Welcome illustration" />
            </div>
        </div>
    );
}