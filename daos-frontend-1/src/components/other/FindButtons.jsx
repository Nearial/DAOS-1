import ButtonTag from '../components/atoms/ButtonTag';

import styles from "./FindButtons.module.css";

export default function FindButtons() {
    return (
        <div className='find-buttons'>
            <ButtonTag id={styles.left} buttonColor='white' buttonText='Find musician' />
            <ButtonTag buttonColor='white' buttonText='Find ensemble' />
        </div>
    );
}