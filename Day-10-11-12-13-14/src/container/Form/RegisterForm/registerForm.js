import React, { Component } from 'react';
import './registerForm.css';
import { CheckValidation } from '../../../utils/Validation/FormValidation';
import { Input } from '../../../component/UI/Input/input';
import { Button } from '../../../component/UI/Button/button';
import axios from 'axios';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerForm: props.formData,
      isFormValid: false,
      errorMsg: false,
    };
  }

  inputChangeHandler = (e, identifier) => {
    const updatedRegisterForm = { ...this.state.registerForm };
    var updatedInputElement = { ...updatedRegisterForm[identifier] };
    updatedInputElement.value = e.target.value;
    updatedInputElement.valid = CheckValidation(
      updatedInputElement.value,
      updatedInputElement.validation
    );
    updatedInputElement.touched = true;
    updatedRegisterForm[identifier] = updatedInputElement;

    let formValid = false;
    for (let identifier in updatedRegisterForm) {
      formValid = updatedRegisterForm[identifier].valid;
    }
    this.setState({
      registerForm: updatedRegisterForm,
      isFormValid: formValid,
    });
  };

  submitForm = event => {
    event.preventDefault();
    const registerForm = { ...this.state.registerForm };
    const formData = {};
    for (let key in registerForm) {
      formData[key] = registerForm[key].value;
    }
    this.register(formData);
  };

  register = formData => {
    axios
      .post('/register', formData)
      .then(response => {
        localStorage.setItem('username', formData.username);
        localStorage.setItem('password', formData.password);
        this.props.history.push('/login');
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMsg: true });
      });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.registerForm) {
      formElementsArray.push({
        id: key,
        config: this.state.registerForm[key],
      });
    }
    console.log(formElementsArray);
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
          elementType="submit"
          name="register"
          disabled={!this.state.isFormValid}
          click={this.submitForm}
        />
      </form>
    );
    return (
      <div className="register-page">
        <div className="form">{form}</div>
      </div>
    );
  }
}

export default RegisterForm;
