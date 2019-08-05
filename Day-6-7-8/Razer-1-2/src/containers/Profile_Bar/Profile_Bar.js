import React, {Component} from 'react';
import  '../../assets/css/profile-bar.css';
import  '../../assets/css/dropdown.css';
import '../../assets/css/tooltip.css';

class Profile_Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownProfilesExpand: false,
      isDropdownMenuExpand: false,
      isEditProfileName: false,
      isDeleteProfileToggle: false,
      selected: 0,
      tempAddNum: 0,
      dupName: null,
      profilesItems: [
        {
          name: 'default profile',
          choose: 'selected'
        },
        {
          name: 'profile 1',
          choose: ''
        },
        {
          name: 'profile 2',
          choose: ''
        },
        {
          name: 'profile 3',
          choose: ''
        },
        {
          name: 'profile 4',
          choose: ''
        },
        {
          name: 'profile 5',
          choose: ''
        }
      ]     
    }
  }

  handleProfileToggle = () => {
    this.setState(state => ({
      isDropdownProfilesExpand: !state.isDropdownProfilesExpand,
    }));
  }

  handleMenuToggle = () =>{
    this.setState(state => ({
      isDropdownMenuExpand: !state.isDropdownMenuExpand,
    }));
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickout)
  }

  handleClickout = (e) => {
    if(this.state.isDropdownProfilesExpand && e.target.id !== "profileDropOpt" && ( isNaN(e.target.id) || e.target.id.length  === 0)){
      this.setState({
        isDropdownProfilesExpand: false
      })
    }
    if(this.state.isDropdownMenuExpand && e.target.className !== "act action" && ( isNaN(e.target.id) || e.target.id.length  === 0)){
      this.setState({
        isDropdownMenuExpand: false
      })
    }
    if(this.state.isDeleteProfileToggle && e.target.id !== "deleteConfirm" && e.target.id !== "deleteAlert") {
      this.setState({
        isDeleteProfileToggle: false
      })
    }
  }

  getItems = () => {
    const items = this.state.profilesItems
    const listItems = items.map(
      (items,index) =>
      <div
        id={index}
        className={"option " + items.choose}
        onClick={this.chooseItem}
      > {items.name} </div>
    )
    return listItems;      
  }

  chooseItem = (e) => {
    var newItemIndex = e.target.id
    var oldItemIndex = this.state.selected
    const list = [...this.state.profilesItems];

    list[newItemIndex].choose = "selected";
    list[oldItemIndex].choose = '';
    this.setState({
      profilesItems: list,
      selected: newItemIndex,
      isDropdownProfilesExpand: false
    })
  }

  addProfileItem = () => {
    var newProfile;
    if(this.state.tempAddNum === 0) {
        newProfile = {
            name:"New Profile",
            choose: "selected"
        }
        this.setState({tempAddNum: this.state.tempAddNum + 1})
        console.log('temp' + this.state.tempAddNum)

    } else {
        newProfile = {
            name: "New Profile (" + this.state.tempAddNum +")",
            choose: "selected"
        }
        this.setState({tempAddNum: this.state.tempAddNum + 1})
        console.log('temp' + this.state.tempAddNum)
    }

    var list = [...this.state.profilesItems]
    list[this.state.selected].choose = "";
    list.push(newProfile);
    this.setState({
      profilesItems: list,
      selected: list.length - 1,
    })
  }
  
  duplicateProfileItem = () => {
    var dupProfile;
    var list = [...this.state.profilesItems]
    var name = this.state.profilesItems[this.state.selected].name
    var tempDupNum = 1
    var open = name.lastIndexOf("(")
    var close = name.lastIndexOf(")")
    console.log(name)
    if (open > 0 && close > 0 && close > open) {
      tempDupNum = parseInt(name.substring(open + 1, close)) + 1
      name = name.substring(0, open - 1)
    } else {
      tempDupNum = 1     
    }
    dupProfile = {
        name: name + " (" + tempDupNum +")",
        choose: "selected"
      }
    list.push(dupProfile)
    list[this.state.selected].choose = "";
    this.setState({
      profilesItems: list,
      selected: list.length - 1
    })
  }

  handleRenameToggle = () => {
    this.setState({
      isEditProfileName: !this.state.isEditProfileName
    })
  }

  renameProfileItem = (e) => {
    var list = [...this.state.profilesItems]
    list[this.state.selected].name = e.target.value;
    this.setState({isEditProfileName: false})
  }

  handleDeleteToggle = () => {
    var list = [...this.state.profilesItems];
    var length = list.length;
    if(length > 1) {
      this.setState({
        isDeleteProfileToggle: !this.state.isDeleteProfileToggle
      })  
    }
  }

  deleteProfileItem = () => {
    console.log('selected ' + this.state.selected)
    var list = [...this.state.profilesItems]
    var position = parseInt(this.state.selected)
    list[position - 1].choose = "selected"
    list.splice(position, 1)
    this.setState({
      profilesItems: list,
      selected: position - 1,
      isDeleteProfileToggle: false,
    })
  }

  render () {
    let profileDropdown = null;
    let profileItemsDropdown = null;
    let deleteAlertMessage = null;

    if(this.state.isDropdownProfilesExpand) {
      profileDropdown =
      <div id="profileDrop" className="s3-dropdown expand" onClick={this.handleProfileToggle}>
          <div className="selected">{this.state.profilesItems[this.state.selected].name}</div>
          <div className="icon expand" />
      </div>
      profileItemsDropdown =
      <div id="profileDropOpt" className="s3-options flex expand">
          {this.getItems()}
      </div>

    } else {
      profileDropdown =
      <div id="profileDrop" className="s3-dropdown" onClick={this.handleProfileToggle}>
          <div className="selected">{this.state.profilesItems[this.state.selected].name}</div>
          <div className="icon expand" />
      </div>
      profileItemsDropdown =
      <div id="profileDropOpt" className="s3-options flex">
          {this.getItems()}
      </div>
    }

    if(this.state.isDeleteProfileToggle) {
      deleteAlertMessage = 
      <div id="deleteAlert" className="flex alert profile-del show">
					<div className="title">delete profile</div>
					<div className="body-text t-center">
						You're about to delete this profile. All bindings in this profile will be deleted.
					</div>
					<div className="thx-btn" id="deleteConfirm" onClick={this.deleteProfileItem}>delete</div>
			</div>
    }

    return (
      <div className="profile-bar flex">
      <div className="loader" tooltip="Syncing Profiles" />
      <div>profile</div>
      <input 
        type="text" 
        name="profile" 
        id="profileEdit" 
        maxLength={25} 
        className={this.state.isEditProfileName ? "show" : ""} 
        defaultValue={this.state.profilesItems[this.state.selected].name}
        onBlur={this.renameProfileItem}
      />
      <div className="dropdown-area">
        {profileDropdown}
        {profileItemsDropdown}
      </div>
        {deleteAlertMessage}
      <div className="dots3 hover-border" id="profileMenuToggle" onClick={this.handleMenuToggle}>
        <div className={this.state.isDropdownMenuExpand ? "profile-act show" : "profile-act"} id="profileMenu">
          <div className="act action" onClick={this.addProfileItem}>add</div>
          <div className="act action">import</div>
          <div className="act divider" />
          <div className="act action" onClick={this.handleRenameToggle}>rename</div>
          <div className="act action" onClick={this.duplicateProfileItem}>duplicate</div>
          <div className="act action">export</div>
          <div className="act divider" />
          <div className="act action" id="deleteAction" onClick={this.handleDeleteToggle}>delete</div>
        </div>
      </div>
      <div id="deleteAlert" className="flex alert profile-del">
        <div className="title">delete profile</div>
        <div className="body-text t-center">
          You're about to delete this profile. All bindings in this profile will be deleted.
        </div>
        <div className="thx-btn" id="deleteConfirm">delete</div>
      </div>
      <div className="obm hover-border" tooltip="On-board Profiles" />
      <div className="divider" />
      <div className="batt batt-30" tooltip="30% Battery" />
    </div>
    )
  }  
}

export default Profile_Bar;