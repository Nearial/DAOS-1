import { Link } from "react-router-dom";

import PTag from "../atoms/PTag";

import footerIllustration from "../../img/footer-illustration.svg";

import styles from "./FooterPrivacyPolicy.module.css"

export default function FooterPrivacyPolicy() {
    return (
        <div className={styles.footerPrivacyPolicyDefault}>
            <img src={footerIllustration} alt="Footer illustration" />
            <Link to="#">
                <PTag pType="small" pColor="white" pText="Privacy policy" />
            </Link>
        </div>
    );
}