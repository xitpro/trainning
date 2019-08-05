import React, { Component } from 'react';
import './loginForm.css';

import { CheckValidation } from '../../../utils/Validation/FormValidation';

import { Input } from '../../../component/UI/Input/input';
import { Button } from '../../../component/UI/Button/button';
import axios from 'axios';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: props.formData,
      isFormValid: false,
      errorMsg: false,
    };
  }

  inputChangeHandler = (e, identifier) => {
    const updatedLoginForm = { ...this.state.loginForm };
    var updatedInputElement = { ...updatedLoginForm[identifier] };
    updatedInputElement.value = e.target.value;
    updatedInputElement.valid = CheckValidation(
      updatedInputElement.value,
      updatedInputElement.validation
    );
    updatedInputElement.touched = true;
    updatedLoginForm[identifier] = updatedInputElement;

    let formValid = false;
    for (let identifier in updatedLoginForm) {
      formValid = updatedLoginForm[identifier].valid;
    }
    this.setState({ loginForm: updatedLoginForm, isFormValid: formValid });
  };

  submitForm = event => {
    event.preventDefault();
    const loginForm = { ...this.state.loginForm };
    const formData = {};
    for (let key in loginForm) {
      formData[key] = loginForm[key].value;
    }
    this.login(formData);
  };

  login = formData => {
    axios
      .post('/login', formData)
      .then(response => {
        console.log(response);
        localStorage.setItem('isUserAuthenticated', true);
        localStorage.setItem('username', formData.username);
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMsg: true });
      });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.loginForm) {
      formElementsArray.push({
        id: key,
        config: this.state.loginForm[key],
      });
    }
    let form = (
      <form>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={e => {
              this.inputChangeHandler(e, formElement.id);
            }}
            errorMsg={formElement.config.errorMessage}
            invalid={!formElement.config.valid}
            touched={formElement.config.touched}
            showErrorMessage={this.state.errorMsg}
          />
        ))}
        <Button
          disabled={!this.state.isFormValid}
          elementType="submit"
          name="login"
          click={this.submitForm}
        />
        <div className="para-footer">
          <p>
            Not registered? <a href="/register">Create an account</a>
          </p>
        </div>
      </form>
    );
    return (
      <div className="login-page">
        <div className="form">{form}</div>
      </div>
    );
  }
}

export default LoginForm;
