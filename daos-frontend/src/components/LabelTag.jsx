import styles from './LabelTag.module.css';

export default function LabelTag({labelColor, labelText}) {
    return (
        <label className={`${styles.labelDefaultTag} ${styles[labelColor]}`}>
            {labelText}
        </label>
    );
}