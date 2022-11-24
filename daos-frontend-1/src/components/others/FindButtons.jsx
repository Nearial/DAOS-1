import { useNavigate } from "react-router-dom";
import ButtonTag from "../atoms/ButtonTag";

export default function FindButtons() {
    
    const navigate = useNavigate();

    function goToFindMusician() {
        navigate("/find-musician");
    }

    function goToFindEnsemble() {
        navigate("/find-ensemble");
    }
    
    return (
        <div className="find-buttons">
            <ButtonTag buttonFunction={goToFindMusician} buttonColor="white" buttonText="Find musician" />
            <ButtonTag buttonFunction={goToFindEnsemble} buttonColor="white" buttonText="Find ensemble" />
        </div>
    );
}