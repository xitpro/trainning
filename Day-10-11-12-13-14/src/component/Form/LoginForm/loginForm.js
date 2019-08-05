import React from 'react';
import { loginFormData } from '../../../model/LoginFormData';
import LoginFormHandler from '../../../container/Form/LoginForm/loginForm';

export const LoginForm = props => {
  return <LoginFormHandler history={props.history} formData={loginFormData} />;
};
