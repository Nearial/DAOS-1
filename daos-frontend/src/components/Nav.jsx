import { Link } from 'react-router-dom';

import LabelTag from './LabelTag';

import styles from './Nav.module.css'

export default function Nav() {
    return (
        <nav className={styles.navDefault}>
            <Link to='/'>
                <LabelTag labelColor='blue' labelText='Home' />
            </Link>
            <Link to='/musicians'>
                <LabelTag labelColor='blue' labelText='Find musician' />
            </Link>
            <Link to='/ensembles'>
                <LabelTag labelColor='blue' labelText='Find ensemble' />
            </Link>
            <Link to='/profile'>
                <LabelTag labelColor='blue' labelText='Profile' />
            </Link>
        </nav>
    );
}