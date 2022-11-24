import HTag from "../components/atoms/HTag";

import FindButtons from "../components/others/FindButtons";

import homeIllustration from "../img/home-illustration.svg";

export default function Home() {
    return (
        <div className="home">
            <div className="home-intro">
                <HTag hType="h1" hColor="red" hText="The place where musicians find musicians and play music together" />
                <FindButtons />
            </div>
            <div className="home-illustration">
                <img src={homeIllustration} alt="Home illustration" />
            </div>
        </div>
    );
}