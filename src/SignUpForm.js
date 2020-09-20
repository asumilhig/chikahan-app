import React from 'react';
import '../node_modules/bulma/css/bulma.css';
import InputField from './InputField';

class SignUpForm extends React.Component {
    render() {
        return (
            <div className="signupform box">
                Sign Up
                <InputField 
                    type="text"
                    placeholder="UserName"
                />
            </div>
        )
    }
}

export default SignUpForm;