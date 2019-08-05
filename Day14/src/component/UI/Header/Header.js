import { Layout, Icon } from 'antd';
import React from 'react';
import './Header.css';
const { Header } = Layout;

const HeaderLayout = props => {
  return (
    <Header className="header" theme="dark" style={{ padding: 0 }}>
      <div className="usernameDiv">
        <div className="iconLogoutDiv" onClick={props.logout}>
          <Icon type="logout" />
        </div>
        <div className="username">{localStorage.username}</div>
      </div>
    </Header>
  );
};

export default HeaderLayout;
