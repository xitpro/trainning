import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import { MenuData } from '../../../model/MenuData';
import './Sider.css';

const { Sider } = Layout;
const menuItemArray = [];

for (let key in MenuData) {
  menuItemArray.push({
    id: key,
    config: MenuData[key],
  });
}

const SiderLayout = props => {
  let menuItem = menuItemArray.map(menuElement => (
    <Menu.Item key={menuElement.config.key} onClick={props.choose}>
      <Icon type={menuElement.config.icon} theme={menuElement.config.theme} />
      <span>{menuElement.config.displayText}</span>
      <Link to={{ pathname: menuElement.config.path }} />
    </Menu.Item>
  ));

  return (
    <Sider collapsible collapsed={props.collapsed} onCollapse={props.toggle}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={props.selectedItem}>
        {menuItem}
      </Menu>
    </Sider>
  );
};
export default SiderLayout;
