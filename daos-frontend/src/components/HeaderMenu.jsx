import Nav from './Nav';
import RegistrationButtons from './RegistrationButtons';

import styles from './HeaderMenu.module.css';

export default function HeaderMenu() {
    return (
        <div className={styles.headerMenuDefault}>
            <Nav />
            <RegistrationButtons />
        </div>
    );
}