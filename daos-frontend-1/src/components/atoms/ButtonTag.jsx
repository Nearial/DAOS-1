import styles from "./ButtonTag.module.css";

export default function ButtonTag({buttonColor, buttonText, buttonFunction}) {
    return (
        <button onClick={buttonFunction} className={`${styles.buttonDefaultTag} ${styles[buttonColor]}`}>
            {buttonText}
        </button>
    );
}