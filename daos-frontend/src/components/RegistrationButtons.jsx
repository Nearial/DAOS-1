import { useNavigate } from 'react-router-dom';
import ButtonTag from './ButtonTag';

export default function RegistrationButtons() {

    const navigate = useNavigate();

    function toSignUp() {
        navigate('/sign-up')
    }

    function toLogin() {
        navigate('/login')
    }

    return (
        <div className='registration-buttons'>
            <ButtonTag buttonFunction={toSignUp} buttonColor='blue' buttonText='Sign up' buttonPosition='left' />
            <ButtonTag buttonFunction={toLogin} buttonColor='white' buttonText='Login' buttonPosition='right' />
        </div>
    );
}