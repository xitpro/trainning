import '../../assets/eq/fonts/roboto.css';
import '../../assets/eq/fonts/razerf5.css';

import '../../assets/eq/css/main.css';
import '../../assets/eq/css/tooltip.css';
import '../../assets/eq/css/profile.css';

import React from 'react';

const ProfileList = props => {
  const getProfiles = () => {
    const profiles = props.profilesDefault;
    const listProfiles = profiles.map((profile, index) => (
      <div
        id={
          profile.isDefault === true
            ? 'default-' + profile.id
            : 'custom-' + profile.id
        }
        className={
          profile.isDefault === true
            ? 'profile-item ' + profile.class + ' no-edit ' + profile.choose
            : 'profile-item ' + profile.class + ' ' + profile.choose
        }
        onClick={props.setCurrentProfile}
      >
        {profile.name}
      </div>
    ));
    return (
      <div id="profileList" className="scrollable">
        {listProfiles}
        <input
          id="profileRename"
          className={props.showFormEdit ? 'profile-item show' : 'profile-item'}
          defaultValue={props.profilesDefault[props.selected].name}
          maxLength="25"
          style={{ top: 30 * props.selected }}
          onChange={props.handleInputChange}
          // value={props.nameSelected}
          onKeyDown={props.keyPress}
          onFocus={props.handleFocus}
          onBlur={props.renameProfile}
        />
      </div>
    );
  };
  return getProfiles();
};

export default ProfileList;
