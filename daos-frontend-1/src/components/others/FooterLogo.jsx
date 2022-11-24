import PTag from "../atoms/PTag";

import footerLogo from "../../img/footer-logo.webp";

import styles from "./FooterLogo.module.css"

export default function FooterLogo() {
    return (
        <div className={styles.footerLogoDefault}>
            <PTag pType="small" pColor="black" pText="Brought to you by" />
            <img src={footerLogo} alt="Footer logo" />
        </div>
    );
}