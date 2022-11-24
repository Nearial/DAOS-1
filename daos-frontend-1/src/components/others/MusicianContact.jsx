import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

import ButtonTag from "../atoms/ButtonTag";

export default function MusicianContact({musician, showModal, closeModal}) {

    const navigate = useNavigate();

    function goToTest() {
        navigate("#")
        closeModal();
    }

    return (
        <Modal isOpen={showModal} onRequestClose={closeModal} ariaHideApp={false}>
            <h3>{musician.firstName} {musician.lastName}</h3>
            <ButtonTag buttonFunction={goToTest} buttonColor="blue" buttonText={musician.phone} />
            <ButtonTag buttonFunction={goToTest} buttonColor="blue" buttonText={musician.email} />
            <ButtonTag buttonFunction={closeModal} buttonColor="white" buttonText="Back" />
        </Modal>
    );
}