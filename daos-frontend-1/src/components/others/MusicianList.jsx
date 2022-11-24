import MusicianPreview from "./MusicianPreview";

export default function MusicianList({musicians}) {    
    return (
        <div className="musician-list">
            {musicians.map((musician) => {
                return (
                    <MusicianPreview key={musician._id} musician={musician} />
                );
            })}
        </div>
    );
}