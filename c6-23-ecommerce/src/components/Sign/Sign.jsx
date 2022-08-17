import LoginForm from './SignIn/LoginForm';
import RegisterForm from './SignUp/RegisterForm';
import { useState } from 'react';

function Sign() {
    const [signType, setSignType] = useState('signUp');

    const onSign = () => {
        if (signType === 'signUp') setSignType('signIn');
        if (signType === 'signIn') setSignType('signUp');

    }

   

    return (
        <div>
            <button onClick={onSign}>SignUp/SignIn</button>
            { signType === 'signUp' && <RegisterForm/> }
            { signType === 'signIn' && <LoginForm/> }            
                  
        </div>
    );
}

export default Sign;