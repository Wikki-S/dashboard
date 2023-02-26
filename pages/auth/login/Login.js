import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../../component/button/Button';
import Input from '../../../component/input/Input';
import './Login.scss';

const Login = () => {


    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [alertType, setAlertType] = useState();
    const [hasError, setHasError] = useState(false);

    const loginHandler = (e) => {

        e.preventDefault();
        const value = localStorage.getItem('login', name)
        console.log(value)
    }
    return(
        <>
       
        <div className="auth-inner">
        {hasError && 
        <div className="alerts alert-error" role="alert">
            Error message
        </div>
        }
        <form className="auth-form" onSubmit={loginHandler}>
            <div className="form-input-container">
                <Input 
                    id="user-name"
                    name="user-name"
                    type="text"
                    labelText="Username"
                    placeholder="Enter Username"
                    value={name}
                    handleChange={(e)=>{setName(e.target.value)}}
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
                    <label className='checkmark-container' htmlFor='checkbox' >
                        <Input id='checkbox' name="checkbox" type="checkbox" value={false} />
                    </label>
                    <Button 
                    className="auth-button button" disabled={!name || !password } 
                    label={'LOGIN'}  />
                    
                {/* username field */}
                {/* password field */}
                <label className="checkmark-container" htmlFor="checkbox">
                    <input id="checkbox" type="checkbox" name="checkbox" />
                    Keep me signed in
                </label>
            </div>
            {/* button component */}
    <Link to={'/forget-password'} >
            <span className="forgot-password">
                Forgot password?
            </span>
            </Link>
        </form>
    </div>
        
        </>
    )
}


export default Login