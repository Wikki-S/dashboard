import { Link } from 'react-router-dom';
import Button from '../../../component/button/Button';
import Input from '../../../component/input/Input';
import './ForgetPassword.scss';

const ForgetPassword = () => {
    return(
        <><div className="auth-inner">
        <div className="alerts alert-error" role="alert">
            Error message
        </div>
        <form className="auth-form">
            <div className="form-input-container">
                    <Input 
                    id="email"
                    type="text"
                    name="email"
                    value="test@gmail.com"
                    labelText="Email"
                    placeholder="Enter Email"
                    />
                
                    <Button 
                    label={'FORGET'} className="auth-button button" disabled={true} />
                {/* username field */}
                {/* password field */}
        
            </div>
            {/* button component */}
   <Link to={'/'} >
            <span className="forgot-password">
                Go Back
            </span>
            </Link>
        </form>
    </div>
        
        </>
    )
}


export default ForgetPassword