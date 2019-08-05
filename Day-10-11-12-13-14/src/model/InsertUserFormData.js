export const insertUserFromData = {
  UserName: {
    elementType: 'input',
    text: 'Username',
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
    text: 'Password',
    elementConfig: {
      type: 'text',
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
  PhoneNumber: {
    elementType: 'input',
    text: 'Phonenumber',
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
    text: 'Email',
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
