import styles from "./PTag.module.css";

export default function PTag({pType, pLink, pColor, pText}) {
    return (
        <p className={`${styles.pDefaultTag} ${styles[pType]} ${styles[pLink]} ${styles[pColor]}`}>
            {pText}
        </p>
    );
}