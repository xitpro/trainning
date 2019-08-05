import React from 'react';
import '../../assets/css/main.css';

import Widget_Left from '../../containers/mic/Widget_Left';
import Widget_Right from '../../containers/mic/Widget_Right';
import Profile_Bar from '../../containers/mic/Profile_Bar';

const Main = () => {
  return (
    <div className="body-wrapper scrollable">
      <Profile_Bar />
      <div className="body-widgets flex">
        <Widget_Left />
        <Widget_Right />
      </div>
    </div>
  );
};

export default Main;
