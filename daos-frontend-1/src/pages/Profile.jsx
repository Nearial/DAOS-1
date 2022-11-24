import { useNavigate } from "react-router-dom";

import HTag from "../components/atoms/HTag";
import LabelTag from "../components/atoms/LabelTag";
import PTag from "../components/atoms/PTag";

export default function Profile() {

    const navigate = useNavigate();

    function goToEdit() {
        navigate("/profile/edit");
    }

    function goToSettings() {
        navigate("/profile/settings");
    }

    const profile = {
        firstName: "Hans",
        lastName: "Hansen",
        status: "Seeking",
        text: "Jeg hedder Hans...",        
    }

    return (
        <div className="profile">
            <div className="profile-component">
                <div className="profile-info">
                    <HTag hType="h3" hColor="red" hText={`${profile.firstName} ${profile.lastName}`} />
                    <div>{profile.status}</div>
                    <div className="profile-buttons">
                        <button onClick={goToEdit}>Edit Profile</button>
                        <button onClick={goToSettings}>Settings</button>
                    </div>
                </div>
                <div className="profile-text">
                    <div className="profile-text-label">
                        <LabelTag labelType="normal" labelColor="blue" labelText="Profile text" />
                        <button onClick={goToEdit}>Edit</button>
                    </div>
                    <PTag pType="normal" pColor="grey" pText={profile.text} />
                </div>
            </div>
        </div>
    );
}