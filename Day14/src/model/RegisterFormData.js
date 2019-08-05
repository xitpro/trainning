export const registerFormData = {
  UserName: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Username...',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Please enter your username!',
  },
  PassWord: {
    elementType: 'input',
    elementConfig: {
      type: 'password',
      placeholder: 'Password...',
    },
    value: '',
    validation: {
      required: true,
      minLength: 6,
      isNumeric: true,
      isPassword: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Password must be a number and have at least 6 characters!',
  },
  confirmPassword: {
    elementType: 'input',
    elementConfig: {
      type: 'password',
      placeholder: 'Repeat password...',
    },
    value: '',
    validation: {
      required: true,
      isNumeric: true,
      // isEqualPassword: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Please repeat exactly your password!',
  },
  PhoneNumber: {
    elementType: 'input',
    elementConfig: {
      type: 'phone',
      placeholder: 'Phonenumber...',
    },
    value: '',
    validation: {
      required: true,
      maxLength: 10,
      isNumeric: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Password must be a number and have max 10 characters!',
  },
  Email: {
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'Email...',
    },
    value: '',
    validation: {
      required: true,
      isEmail: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Email invalid!',
  },
};
