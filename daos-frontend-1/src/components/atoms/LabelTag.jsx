import styles from "./LabelTag.module.css";

export default function LabelTag({labelType, labelColor, labelLink , labelText}) {
    return (
        <label className={`${styles.labelDefaultTag} ${styles[labelType]} ${styles[labelColor]} ${styles[labelLink]}`}>
            {labelText}
        </label>
    );
}