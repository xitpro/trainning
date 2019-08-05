import React from 'react';
import './input.css';
import { Menu, Dropdown, Button, Icon } from 'antd';

export const Input = props => {
  let inputElement = null;

  // const menu = (
  //   <Menu>
  //     {props.dropdownItems.map(item => (
  //       <Menu.Item key={item.key}>
  //         <Icon type={item.type} />
  //         {item.name}
  //       </Menu.Item>
  //     ))}
  //   </Menu>
  // );

  switch (props.elementtype) {
    case 'input': {
      inputElement = (
        <input
          className="input"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    }
    case 'textarea': {
      inputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    }

    // case 'dropdown': {
    //   inputElement = (
    //     <Dropdown overlay={menu}>
    //       <Button>
    //         {props.text} <Icon type="down" />
    //       </Button>
    //     </Dropdown>
    //   );
    //   break;
    // }

    default:
      inputElement = (
        <input
          className="input"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
      <p
        className={
          (props.touched && props.invalid) || props.showErrorMessage
            ? 'errorMsg show'
            : 'errorMsg'
        }
      >
        {props.errorMsg}
      </p>
    </div>
  );
};
