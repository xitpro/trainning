import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LeftWrapper from '../../components/eq/Left_Wrapper/Left_Wrapper';
import RightWindow from '../../components/eq/Right_Window/Right_Window';
import * as sessionActions from '../../store/actions/sessionActions';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteCfm: false,
      showFormEdit: false,
      nameCurrentProfile: '',
      nameChanged: '',
    };
  }

  componentWillMount = async () => {
    await this.props.actions.getProfileList();
    console.log(this.props.profilesDefault);
    var name = this.props.profilesDefault[this.props.selected].name;
    this.setState({
      nameCurrentProfile: name,
      showDeleteCfm: false,
      showFormEdit: false,
    });
  };

  componentDidMount = async e => {
    document.addEventListener('mousedown', this.handleClickOut);
  };

  handleClickOut = e => {
    console.log(e.target.id);
    if (this.state.showFormEdit === true && e.target.id !== 'profileRename') {
      this.setState({ showFormEdit: false });
    }
    if (
      this.state.showDeleteCfm === true &&
      e.target.id !== 'cfmDelete' &&
      e.target.id !== 'profileDelCfm' &&
      e.target.id !== 'delName' &&
      e.target.id !== 'deletediv'
    ) {
      this.setState({ showDeleteCfm: false });
    }
  };

  setCurrentProfile = async e => {
    await this.props.actions.chooseProfile(e.target.id);
    this.setState({
      nameCurrentProfile: this.props.profilesDefault[this.props.selected].name,
    });
  };

  addProfile = async () => {
    await this.props.actions.addNewProfile();
    this.setState({
      nameCurrentProfile: this.props.profilesDefault[this.props.selected].name,
    });
    document.getElementById('profileList').scrollTop = 9999999;
  };

  moveUp = () => {
    this.props.actions.moveUp();
  };

  moveDown = () => {
    this.props.actions.moveDown();
  };

  renameProfileToggle = () => {
    this.setState({ showFormEdit: true });
  };

  deleteProfileToggle = () => {
    this.setState({ showDeleteCfm: true });
  };

  handleFocus = event => event.target.select();

  handleInputChange = e => {
    console.log(e.target.value);
    this.setState({ nameChanged: e.target.value });
  };

  keyPress = e => {
    if (e.keyCode === 13) {
      this.renameProfileWithButton();
    }
  };

  renameProfileWithButton = async () => {
    await this.props.actions.changeProfileName(this.state.nameChanged);

    this.setState({
      nameSelected: '',
      showFormEdit: false,
    });
  };

  renameProfile = async e => {
    console.log(e);
    await this.props.actions.changeProfileName(e.target.value);

    this.setState({
      nameSelected: '',
      showFormEdit: false,
    });
  };

  deleteProfile = async () => {
    await this.props.actions.removeProfile();
    this.setState({
      nameSelected: '',
      showDeleteCfm: false,
    });
  };

  render() {
    //console.log('test ' + this.props.profilesDefault);
    return (
      <div className="wrapper-box flex">
        <LeftWrapper
          profilesDefault={this.props.profilesDefault}
          selected={this.props.selected}
          showFormEdit={this.state.showFormEdit}
          handleInputChange={this.handleInputChange}
          nameSelected={this.state.nameSelected}
          keyPress={this.keyPress}
          handleFocus={this.handleFocus}
          showEdit={this.renameProfileToggle}
          addProfile={this.addProfile}
          showDelete={this.deleteProfileToggle}
          moveUp={this.moveUp}
          moveDown={this.moveDown}
          setCurrentProfile={this.setCurrentProfile}
          showDeleteCfm={this.state.showDeleteCfm}
          deleteProfile={this.deleteProfile}
          renameProfile={this.renameProfile}
        />
        <RightWindow nameProfileSelected={this.state.nameCurrentProfile} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profilesDefault: localStorage.profilesDefault
    ? JSON.parse(localStorage.profilesDefault)
    : [],
  selected: localStorage.selected ? localStorage.selected : 0,
});

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(sessionActions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
