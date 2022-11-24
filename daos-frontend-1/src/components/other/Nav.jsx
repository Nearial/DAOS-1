import styles from "./Nav.module.css";

export default function HTag({navType}) {
    return(
        <nav className={`${styles.navDefault} ${styles[navType]}`}>
            <Link to='/'>
                <LabelTag labelText='Home' />
            </Link>
            <Link to='/find-musician'>
                <LabelTag labelText='Find musician' />
            </Link>
            <Link to='/find-ensemble'>
                <LabelTag labelText='Find ensemble' />
            </Link>
            <Link to='/profile'>
                <LabelTag labelText='Profile' />
            </Link>
        </nav>
    );
}