import FooterLogo from "../others/FooterLogo";

import styles from "./Footer.module.css";
import FooterNavigation from "../others/FooterNavigation";
import FooterPrivacyPolicy from "../others/FooterPrivacyPolicy";

export default function Footer() {
  return (
    <footer className={styles.footerDefault}>
        <div className={styles.footerWidgetDefault}>
            <FooterNavigation />
        </div>
        <div className={styles.footerWidgetDefault}>
            <FooterPrivacyPolicy />
        </div>
        <div className={styles.footerWidgetDefault}>
            <FooterLogo />
        </div>
    </footer>
  );
}