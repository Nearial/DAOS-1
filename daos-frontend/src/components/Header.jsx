import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderToggleMenu from './HeaderToggleMenu';

import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.headerDefault}>
            <HeaderLogo />
            <HeaderToggleMenu />
            <HeaderMenu />
        </header>  
    );
}