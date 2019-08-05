import '../../assets/fonts/roboto.css';
import '../../assets/fonts/razerf5.css';

import '../../assets/css/main.css';
import '../../assets/css/tooltip.css';
import '../../assets/css/profile.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { profile_actions } from '../../store/actions/index';

class ProfileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleClickOnProfile = (item, index) => {
    this.props.setCurrentProfile(item);
  };

  render() {
    return (
      <div id="profileList" className="scrollable">
        {/* {this.createProfilesTable()} */}
        <input
          // style={{ top: this.state.editInputPos }}
          id="profileRename"
          className={'profile-item' + (this.props.isEditProfile ? ' show' : '')}
          value={this.state.name}
          placeholder="Enter Profile Name"
          maxLength="25"
          onChange={this.handleNameChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profilesDefault: state.profile.profilesDefault,
    currentProfile: state.profile.currentProfile,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setCurrentProfile: profile_actions.setCurrentProfile,
      addProfile: profile_actions.addProfile,
      renameProfile: profile_actions.renameProfile,
      deleteProfile: profile_actions.deleteProfile,
      switchProfile: profile_actions.switchProfile,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileList);
