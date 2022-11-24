import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import LabelTag from "../components/atoms/LabelTag";
import PTag from "../components/atoms/PTag";

export default function EditProfile() {
    return (
        <div className="edit-profile">
            <button>Back</button>
            <HTag hType="h1" hColor="blue" hText="Edit profile" />
            <form>
                <div className="edit-profile-name">
                    <LabelTag labelType="normal" labelColor="blue" labelText="Name" />
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                </div>
                <div className="edit-profile-text">
                    <LabelTag labelType="normal" labelColor="blue" labelText="Profile text" />                    
                    <textarea placeholder="Here you can write briefly about your musical experience or what you are looking for..."></textarea>
                </div>
                <div className="edit-profile-address">
                    <LabelTag labelType="normal" labelColor="blue" labelText="Address" />
                    <input type="text" placeholder="Zip code" />
                    <input type="text" placeholder="City" />
                </div>
                <div className="edit-profile-contact">
                    <LabelTag labelType="normal" labelColor="blue" labelText="Contact Information" />
                    <PTag pType="small" pColor="grey" pText="Your email address and mobile number are only visible to others if you have marked on your profile that you are looking for someone to play with or if you have an active posting." />
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Phone number" />
                </div>
                <div className="edit-profile-status">
                    <LabelTag labelType="normal" labelColor="blue" labelText="Profile status" />
                    <PTag pType="small" pColor="grey" pText="Are you currently looking for someone to play with? If you choose 'Not looking', your profile will not appear when other musicians do a search." />
                    <button>Looking</button>
                    <button>Not looking</button>
                </div>
                <ButtonTag buttonColor="blue" buttonText="Save profile" />
            </form>
        </div>
    );
}