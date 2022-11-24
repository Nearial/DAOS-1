import { useNavigate } from 'react-router-dom';

import HTag from './HTag';
import PTag from './PTag';

import styles from './HeaderLogo.module.css'

export default function HeaderLogo() {

    const navigate = useNavigate();

    function toHome() {
        navigate('/')
    }

    return (
        <div className={styles.headerLogoDefault} onClick={toHome} >
            <HTag hType='h3' hColor='red' hText='Music Interaction' />
            <PTag pType='small' pColor='grey' pText='Created by DAOS - Danish Amateur Orchestra Association' />
        </div>        
    );
}