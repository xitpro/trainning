import React from 'react';
import { registerFormData } from '../../../model/RegisterFormData';
import RegisterFormHandler from '../../../container/Form/RegisterForm/registerForm';

export const RegisterForm = props => {
  return (
    <RegisterFormHandler history={props.history} formData={registerFormData} />
  );
};
