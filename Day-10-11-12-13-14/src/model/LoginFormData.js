export const loginFormData = {
  username: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Username',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Please enter your username!',
  },
  password: {
    elementType: 'input',
    elementConfig: {
      type: 'password',
      placeholder: 'Password',
    },
    value: '',
    validation: {
      required: true,
      minLength: 6,
      isNumeric: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Password must be a number and have at least 6 characters!',
  },
};
