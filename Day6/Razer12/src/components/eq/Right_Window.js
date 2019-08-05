import '../../assets/eq/fonts/roboto.css';
import '../../assets/eq/fonts/razerf5.css';

import '../../assets/eq/css/main.css';
import '../../assets/eq/css/profile.css';

import React from 'react';

const Right_Window = props => {
  return (
    <div className="thx-window">
      <div className="sub-title flex">
        <h1 id="eqTitle" className="eq-title">
          {props.nameProfileSelected}
        </h1>
      </div>
    </div>
  );
};

export default Right_Window;
