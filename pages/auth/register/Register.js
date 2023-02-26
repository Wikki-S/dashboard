import Button from '../../../component/button/Button';
import Input from '../../../component/input/Input';
import './Register.scss';
import { useState } from 'react';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [alertType, setAlertType] = useState();
    const [hasError, setHasError] = useState(false);


    const registerUser = async (e) => {    
        e.preventDefault();
        try{
            setHasError(false);
            setAlertType('alert-success');

        }catch(error){
            setHasError(true);
            setLoading(false);
            setAlertType(true);
            setErrorMessage(error?.response?.data.message);
        }
    };
    return(
        <>
        <div className="auth-inner">
            {hasError && errorMessage (
        <div className={`"alerts" ${alertType}`} role="alert">
                {errorMessage}
        </div>
            )}
        <form className="auth-form" onSubmit={registerUser}>
            <div className="form-input-container">
                <Input 
                    id="username"
                    name="username"
                    type="text"
                    labelText="Username"
                    placeholder="Enter Username"
                    value={name}
                    handleChange={(e)=>{setName(e.target.value)}}
                    />
                     <Input 
                    id="email"
                    name="email"
                    type="text"
                    labelText="Email"
                    placeholder="Enter Email"
                    value={email}
                    handleChange={(e)=> {setEmail(e.target.value)}}
                    />
                    <Input 
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    labelText="Password"
                    placeholder="Enter Password"
                    handleChange={(e)=>{setPassword(e.target.value)}}
                    />
                  
                    <Button label={`${loading ? 'Signup in progress': 'signup'}`} 
                    className="auth-button button" disabled={!name || !email || !password } />
                {/* username field */}
                {/* password field */}
              
            </div>
            {/* button component */}
    
        </form>
    </div>
        
        </>
    )
}


export default Register