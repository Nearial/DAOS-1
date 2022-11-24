import { useNavigate } from "react-router-dom";

import HTag from "../atoms/HTag";
import LabelTag from "../atoms/LabelTag";

export default function MusicianPreview({musician}) {
    
    const navigate = useNavigate();

    function goToMusician(id) {
        navigate(`/find-musician/${id}`);
    }

    return (
        <div className="musician-preview">
            <div className="musician-info">
                <HTag hType="h3" hColor="red" hText={`${musician.firstName} ${musician.lastName}`} />
                <LabelTag labelType="small" labelColor="grey" labelText={musician.city} />
            </div>
            <button onClick={() => {goToMusician(musician._id)}}>Show profile</button>
        </div>
    );
}