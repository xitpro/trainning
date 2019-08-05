import React from 'react';
import './button.css';

export const Button = props => {
  let buttonElement = null;

  switch (props.elementType) {
    case 'submit': {
      buttonElement = (
        <button
          className="btn btn-success"
          disabled={props.disabled}
          onClick={props.click}
        >
          {props.name}
        </button>
      );
      break;
    }
    case 'add': {
      buttonElement = (
        <button
          className="btn btn-primary"
          disabled={props.disabled}
          onClick={props.click}
        >
          {props.name}
        </button>
      );
      break;
    }
    case 'edit': {
      buttonElement = (
        <button
          className="btn btn-edit"
          disabled={props.disabled}
          onClick={props.click}
        >
          {props.name}
        </button>
      );
      break;
    }
    case 'delete': {
      buttonElement = (
        <button
          className="btn btn-danger"
          disabled={props.disabled}
          onClick={props.click}
        >
          {props.name}
        </button>
      );
      break;
    }
    default: {
      buttonElement = (
        <button className="btn" disabled={props.disabled} onClick={props.click}>
          {props.name}
        </button>
      );
      break;
    }
  }

  return <div>{buttonElement}</div>;
};
