import { Link } from "react-router-dom";

import HTag from "../atoms/HTag";
import LabelTag from "../atoms/LabelTag";

import footerInstagram from "../../img/footer-instagram.svg";
import footerFacebook from "../../img/footer-facebook.svg";

import styles from "./FooterNavigation.module.css"

export default function FooterNavigation() {
    return (
        <div className={styles.footerNavigationDefault}>
            <HTag hType="h3" hColor="white" hText="MUSIC INTERACTION" />
            <nav>
                <Link to="/">
                    <LabelTag labelType="normal" labelColor="white" labelLink="link" labelText="Home" />
                </Link>
                <Link to="/find-musician">
                    <LabelTag labelType="normal" labelColor="white" labelLink="link" labelText="Find musician" />
                </Link>
                <Link to="/find-ensemble">
                    <LabelTag labelType="normal" labelColor="white" labelLink="link" labelText="Find ensemble" />
                </Link>
                <Link to="/profile">
                    <LabelTag labelType="normal" labelColor="white" labelLink="link" labelText="Profile" />
                </Link>
            </nav>
            <div className="footer-navigation-social-media">
                <Link to="#">
                    <img src={footerInstagram} alt="Instagram" />
                </Link>
                <Link to="#">
                    <img src={footerFacebook} alt="Facebook" />
                </Link>
            </div>
        </div>
    );
}