import '../../assets/eq/fonts/roboto.css';
import '../../assets/eq/fonts/razerf5.css';

import '../../assets/eq/css/main.css';
import '../../assets/eq/css/tooltip.css';
import '../../assets/eq/css/profile.css';

import React from 'react';
import ProfileList from './ProfileList';
import ToolBar from './ToolBar';

const Left_Wrapper = props => {
  return (
    <div className="thx-drawer flex">
      <div className="main-title">Profile List</div>
      <div id="profileWrapper" className="drawer-select flex">
        <ProfileList
          profilesDefault={props.profilesDefault}
          setCurrentProfile={props.setCurrentProfile}
          showFormEdit={props.showFormEdit}
          selected={props.selected}
          handleInputChange={props.handleInputChange}
          nameSelected={props.nameSelected}
          handleFocus={props.handleFocus}
          keyPress={props.keyPress}
          renameProfile={props.renameProfile}
        />
        <ToolBar
          profilesDefault={props.profilesDefault}
          addProfile={props.addProfile}
          showEdit={props.showEdit}
          showDelete={props.showDelete}
          moveDown={props.moveDown}
          moveUp={props.moveUp}
          selected={props.selected}
          showDeleteCfm={props.showDeleteCfm}
          deleteProfile={props.deleteProfile}
        />
      </div>
    </div>
  );
};

export default Left_Wrapper;
