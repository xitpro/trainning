export function CheckValidation(values, validation) {
  let isValid = true;
  let password = '';
  if (validation.required) {
    isValid = values.trim() !== '' && isValid;
  }
  if (validation.minLength) {
    var min = parseInt(validation.minLength);

    isValid = values.length >= min && isValid;
  }
  if (validation.maxLength) {
    var max = parseInt(validation.maxLength);

    isValid = values.length <= max && isValid;
  }
  if (validation.isNumeric) {
    const pattern = /^\d+$/;

    isValid = pattern.test(values) && isValid;
  }
  if (validation.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    isValid = pattern.test(values) && isValid;
  }
  if (validation.isPassword) {
    password = values;
  }
  if (validation.isEqualPassword) {
    var passwordField = 'password';
    isValid = values === this.state.Form[passwordField].value && isValid;
  }

  return isValid;
}
