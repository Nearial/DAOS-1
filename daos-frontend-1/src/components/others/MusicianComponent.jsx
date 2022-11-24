import { useState } from "react";

import ButtonTag from "../atoms/ButtonTag";
import HTag from "../atoms/HTag";
import LabelTag from "../atoms/LabelTag";
import PTag from "../atoms/PTag";

import MusicianContact from "./MusicianContact";

export default function MusicianComponent({musician}) {

    const [showModal, setShowModal] = useState(false);

    function showContactInfo() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    return (
        <div className="musician-component">
            <div className="musician-info">
                <HTag hType="h3" hColor="red" hText={`${musician.firstName} ${musician.lastName}`} />
            <div>{musician.status}</div>
            <div className="musician-contact-info">
                <ButtonTag buttonFunction={showContactInfo} buttonColor="blue" buttonText="Contact" />
                <MusicianContact musician={musician} showModal={showModal} closeModal={closeModal} />
            </div>
            </div>
            <div className="musician-text">
                <div className="musician-text-label">
                    <LabelTag labelType="normal" labelColor="blue" labelText="Profile text" />
                </div>
                <PTag pType="normal" pColor="grey" pText={musician.text} />
            </div>
        </div>
    );
}