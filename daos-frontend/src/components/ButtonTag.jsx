import styles from "./ButtonTag.module.css";

export default function ButtonTag({buttonFunction, buttonColor, buttonPosition, buttonText}) {
    return (
        <button onClick={buttonFunction} className={`${styles.buttonDefaultTag} ${styles[buttonColor]} ${styles[buttonPosition]}`}>
            {buttonText}
        </button>
    );
}