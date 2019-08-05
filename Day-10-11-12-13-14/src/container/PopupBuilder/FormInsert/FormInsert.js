import React, { Component } from 'react';
import '../PopupBuilder.css';
import { Input } from '../../../component/UI/Input/input';
import { CheckValidation } from '../../../utils/Validation/FormValidation';

class FormInsert extends Component {
  state = {
    form: this.props.fields,
    isFormValid: this.props.valid,
  };

  onSubmit = event => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.form) {
      formData[formElementIdentifier] = this.state.form[
        formElementIdentifier
      ].value;
    }

    this.props.submit(formData);
  };

  inputChangeHandler = (e, identifier) => {
    const updatedForm = { ...this.state.form };
    var updatedInputElement = { ...updatedForm[identifier] };
    updatedInputElement.value = e.target.value;
    updatedInputElement.valid = CheckValidation(
      updatedInputElement.value,
      updatedInputElement.validation
    );
    updatedInputElement.touched = true;
    updatedForm[identifier] = updatedInputElement;

    let formValid = true;
    for (let identifier in updatedForm) {
      formValid = updatedForm[identifier].valid && formValid;
      console.log(formValid);
    }
    this.setState({ form: updatedForm, isFormValid: formValid });
  };

  getForm = () => {
    const formElementsArray = [];

    for (let key in this.state.form) {
      console.log(this.state.form);
      formElementsArray.push({
        id: key,
        config: this.state.form[key],
      });
    }

    let form = (
      <form id="forminsert">
        {formElementsArray.map(formElement => (
          <>
            <p>{formElement.config.text}:</p>
            <div className="inputelement">
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
            </div>
          </>
        ))}
      </form>
    );
    return (
      <>
        {form}
        <div className="customFooter">
          <button onClick={this.props.close}>Cancel</button>
          <button
            disabled={!this.state.isFormValid}
            onClick={this.onSubmit}
            className="btnSubmit"
          >
            {this.props.btnActionName}
          </button>
        </div>
      </>
    );
  };

  render() {
    return <div>{this.getForm()}</div>;
  }
}
export default FormInsert;
