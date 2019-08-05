import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import PopupBuilder from '../PopupBuilder/PopupBuilder';
import { connect } from 'react-redux';
import { insertUserFromData } from '../../model/InsertUserFormData';
import 'antd/dist/antd.css';
import './UserPage.css';
import {
  fetchUsers,
  deleteUser,
  submitUsers,
} from '../../store/actions/userActions';

const columns = [
  {
    title: 'Username',
    dataIndex: 'UserName',
    key: 'UserName',
    width: '250px',
  },
  {
    title: 'Password',
    dataIndex: 'PassWord',
    key: 'PassWord',
    width: '100px',
  },
  {
    title: 'Phonenumber',
    dataIndex: 'PhoneNumber',
    key: 'PhoneNumber',
    width: '200px',
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'Email',
    width: '300px',
  },
];

function UserPage(props) {
  const [openModal, setOpenModal] = useState({ isOpen: false, data: {} });

  useEffect(() => {
    props.getUsers();
    console.log(props.users.keys);
  }, []);

  const viewDetails = item => {
    var modalData = {
      type: 'view',
      title: 'User details',
      item: item,
    };
    setOpenModal({ isOpen: true, data: modalData });
  };

  const deleteConfirm = item => {
    var modalData = {
      type: 'delete',
      title: 'Delete Product',
      item: item,
      deleteMessage: 'Do you want to delete User ' + item.UserName + '?',
    };
    setOpenModal({ isOpen: true, data: modalData });
  };

  const deleteuser = () => {
    props.deleteUser(openModal.data.item.UserID);
    setOpenModal({ isOpen: false, data: {} });
  };

  const create = () => {
    var modalData = {
      type: 'insert',
      title: 'Add New User',
      item: {},
    };
    setOpenModal({ isOpen: true, data: modalData });
  };

  const update = item => {
    var modalData = {
      type: 'update',
      title: 'Update User ' + item.UserName,
      item: item,
    };
    setOpenModal({ isOpen: true, data: modalData });
  };

  const Submit = item => {
    if (openModal.data.item.UserID) {
      item.UserID = openModal.data.item.UserID;
    }
    props.postUser(item);
    setOpenModal({ isOpen: false, data: {} });
  };

  return (
    <div className="userPage">
      <div className="header">
        <h1 className="tittle">Users Table Data</h1>
        <button onClick={create}>Add User</button>
      </div>
      <Table
        columns={columns}
        dataSource={props.users}
        viewDetails={viewDetails}
        Delete={deleteConfirm}
        Update={update}
      />
      <PopupBuilder
        fields={insertUserFromData}
        data={openModal.data}
        delete={deleteuser}
        submit={Submit}
        closeModal={() => setOpenModal({ isOpen: false, data: {} })}
        visible={openModal.isOpen}
      />
    </div>
  );
}
const mapStateToProps = state => ({
  users: state.userReducer.users,
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(fetchUsers()),
  postUser: item => dispatch(submitUsers(item)),
  deleteUser: id => dispatch(deleteUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
