import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Sider from '../../component/UI/Sider/Sider';
import Header from '../../component/UI/Header/Header';
import Footer from '../../component/UI/Footer/Footer';
import { Route, Redirect, Switch } from 'react-router-dom';
import UserPage from '../UserPage/UserPage';
import ProductPage from '../ProductPage/ProductPage';
import { MenuData } from '../../model/MenuData';

const { Content } = Layout;
export class LayoutBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  setDefaultPage = () => {
    var itemKey = localStorage.chooseMenuItem;
    if (itemKey == undefined) {
      localStorage.setItem('chooseMenuItem', '1');
    }
    const menuItemArray = [];

    for (let key in MenuData) {
      menuItemArray.push({
        id: key,
        config: MenuData[key],
      });
    }

    var path =
      menuItemArray[parseInt(localStorage.chooseMenuItem) - 1].config.path;

    if (this.props.location.pathname === '/')
      return <Redirect from="/" to={path} />;
    else this.props.history.push('/404');
  };

  collapsedToggleHandler = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isUserAuthenticated');
    this.props.history.push('/login');
  };

  chooseMenuItem = item => {
    localStorage.setItem('chooseMenuItem', item.key);
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsed={this.state.collapsed}
          toggle={this.collapsedToggleHandler}
          selectedItem={localStorage.chooseMenuItem}
          choose={this.chooseMenuItem}
        />
        <Layout>
          <Header logout={this.logout} />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 580,
            }}
          >
            <Switch>
              <Route exact path="/products" component={ProductPage} />
              <Route exact path="/users" component={UserPage} />
              <Route exact path="/" component={this.setDefaultPage} />
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
