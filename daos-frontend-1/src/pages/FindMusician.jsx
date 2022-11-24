import HTag from "../components/atoms/HTag";
import PTag from "../components/atoms/PTag";

import MusicianList from "../components/others/MusicianList";

import useFetch from "../scripts/useFetch";

export default function FindMusician() {

    const { data: musicians, isLoading, error } = useFetch("http://127.0.0.1:3000/profiles")

    return (
        <div className="find-musician">
            <div className="find-musician-info">
                <HTag hType="h1" hColor="blue" hText="Find musician" />
                { !musicians && <PTag pType="normal" pColor="grey" pText="0 musicians found" /> }
                { musicians && <PTag pType="normal" pColor="grey" pText={`${musicians.length} musicians found`} /> }
            </div>
            { error && <p>{ error }</p> }
            { isLoading && <p>Loading...</p> }
            {musicians && <MusicianList musicians={musicians} />}
        </div>
    );
}