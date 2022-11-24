import { useParams } from "react-router-dom";

import MusicianComponent from "../components/others/MusicianComponent";

import useFetch from "../scripts/useFetch";

export default function Musician() {

    const { id } = useParams();

    const { data: musician, isLoading, error } = useFetch("http://127.0.0.1:3000/profiles/" + id)

    return (
        <div className="musician">
            { error && <p>{ error }</p> }
            { isLoading && <p>Loading...</p> }
            { musician && <MusicianComponent musician={musician} /> }
        </div>
    );
}