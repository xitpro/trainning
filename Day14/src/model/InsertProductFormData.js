export const insertProductFormData = {
  Name: {
    elementType: 'input',
    text: 'Product name',
    elementConfig: {
      type: 'text',
      placeholder: '...',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Please enter product name!',
  },
  Category: {
    elementType: 'input',
    text: 'Category',
    elementConfig: {
      type: 'text',
      placeholder: '...',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Please choose a category!',
  },
  Description: {
    elementType: 'textarea',
    text: 'Description',
    elementConfig: {
      type: 'text',
      placeholder: 'Short description for product',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Please enter a description!',
  },
  Price: {
    elementType: 'input',
    text: 'Price',
    elementConfig: {
      type: 'number',
      placeholder: '...',
    },
    value: '',
    validation: {
      isNumeric: true,
      required: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Please enter price!',
  },
  Brand: {
    elementType: 'input',
    text: 'Brand',
    elementConfig: {
      type: 'text',
      placeholder: '...',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Please enter brandname!',
  },
};
