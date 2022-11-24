import toggleShow from '../img/toggle-show.svg';
import toggleHide from '../img/toggle-hide.svg';

export default function HeaderToggleMenu() {
    return (
        <div className='header-toggle-menu'>
            <img src={toggleShow} alt='Toggle show' />
            <img src={toggleHide} alt='Toggle hide' />
        </div>  
    );
}