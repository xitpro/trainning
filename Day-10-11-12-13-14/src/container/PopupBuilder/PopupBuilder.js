import React, { Component } from 'react';
import { Modal } from 'antd';
import './PopupBuilder.css';
import FormInsert from './FormInsert/FormInsert';

class PopupBuilder extends Component {
  details = () => {
    var ElementsArray = [];
    for (var item in this.props.data.item) {
      ElementsArray.push({
        key: item,
        value: this.props.data.item[item],
      });
    }

    let items = (
      <>
        {ElementsArray.map(element => (
          <div className="textdiv">
            <div className="text">{element.key}:</div>
            <div className="value">{element.value}</div>
          </div>
        ))}
      </>
    );

    return (
      <>
        {items}
        <div className="customFooter">
          <button onClick={this.props.closeModal}>X</button>
        </div>
      </>
    );
  };

  getDeleteComfirm = () => {
    let deleteBox = (
      <div className="deletemessage">{this.props.data.deleteMessage}</div>
    );
    return (
      <>
        {deleteBox}
        <div className="customFooter">
          <button onClick={this.props.closeModal}>Cancle</button>
          <button onClick={this.props.delete} className="btnDelete">
            OK
          </button>
        </div>
      </>
    );
  };

  getForm = isnew => {
    let newfi = this.props.fields;
    for (let item in newfi) {
      if (this.props.data.item[item]) {
        newfi[item].value = this.props.data.item[item];
        newfi[item].valid = true;
      } else {
        newfi[item].value = '';
        newfi[item].valid = false;
      }
    }
    let btnName = isnew ? 'Insert' : 'Update';
    return (
      <>
        <FormInsert
          fields={newfi}
          valid={!isnew}
          btnActionName={btnName}
          close={this.props.closeModal}
          submit={this.props.submit}
        />
      </>
    );
  };

  getbody = () => {
    let inputElement = null;
    switch (this.props.data.type) {
      case 'insert':
        inputElement = this.getForm(true);
        break;
      case 'update':
        inputElement = this.getForm(false);
        break;
      case 'delete':
        inputElement = this.getDeleteComfirm();
        break;
      default:
        inputElement = this.details();
    }
    return <>{inputElement}</>;
  };

  render() {
    return (
      <div>
        <Modal
          title={this.props.data.title}
          visible={this.props.visible}
          onCancel={this.props.closeModal}
          footer={null}
          destroyOnClose={true}
        >
          {this.getbody()}
        </Modal>
      </div>
    );
  }
}
export default PopupBuilder;
