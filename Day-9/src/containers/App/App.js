import React, { Component } from 'react';
import './App.css';

// //font
// import '../../assets/fonts/razerf5.css';
// import '../../assets/fonts/roboto.css';

// //css
// import '../../assets/css/main.css';
// import '../../assets/css/body-widgets.css';
// import '../../assets/css/profile.css';

// //mic
// import Header from '../../components/mic/Header';
// import Main from '../../components/mic/Main';
// import Name_Bar from '../../components/mic/Name_Bar';

//eq
import EQ from '../eq/index';
class App extends Component {
  render() {
    return (
      <div className="main-container">
        {/* /********************** mic ****************/}

        {/* <Header></Header>
        <Main></Main>
        <Name_Bar></Name_Bar> */}

        {/* /********************** eq ****************/}
        <div className="thx-wrapper flex">
          <EQ />
        </div>
      </div>
    );
  }
}

export default App;
