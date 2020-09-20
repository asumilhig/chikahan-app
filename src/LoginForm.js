import React from 'react';
import InputField from './InputField';

class LoginForm extends React.Component {
    render() {
        return (
            <div className="loginform box is-centered">
                
                Log In
            
                <InputField
                    type="text"
                    placeholder="Username"
                    onChange=""
                />
                
                <InputField
                    type="text"
                    placeholder="password"
                />
            </div>
        )
    }
}

export default LoginForm;
