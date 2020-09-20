import React from 'react';
import UserStore from './stores/UserStore';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="app">
        <SignUpForm />
        <LoginForm />
      </div>
    )
  }
}

export default App;
