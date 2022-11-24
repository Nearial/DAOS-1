import styles from "./InputTextTag.module.css";

export default function InputTextTag({inputText, inputTextValue, inputTextFunction}) {
    return (
        <input className={styles.inputTextDefaultTag} type="text" placeholder={inputText} value={inputTextValue} onChange={(e) => {inputTextFunction}} />
    );
}