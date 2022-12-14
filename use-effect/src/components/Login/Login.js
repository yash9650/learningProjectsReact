import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailfx = (state,action) =>{
  if(action.type === 'USER_INPUT'){
    return { value: action.value ,isValid:  action.value.includes('@')}
  }
  if(action.type === 'INPUT_BLUR'){
    return { value: state.value ,isValid:  state.value.includes('@')}
  }
  return { value: '',isValid: false }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emailDispatchfx] = useReducer(emailfx,{
    value: '',
    isValid: null
  })

  useEffect(()=>{
    const identifier = setTimeout(()=>{
      console.log('running...');
      setFormIsValid(
        emailState.value.includes('@') && enteredPassword.trim().length > 6
      )  
    },500);
    return () => {
      console.log('CleanUp')
      clearTimeout(identifier);
    }
    
  },[ emailState,enteredPassword ])

  const emailChangeHandler = (event) => {
    emailDispatchfx({
      type: 'USER_INPUT',
      value: event.target.value
    })
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    emailDispatchfx({
      type: 'INPUT_BLUR'
    })
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
