import {
  getCurrentList,
  setCurrentProfile,
  addProfile,
  renameProfile,
  deleteProfile,
  switchProfile,
} from '../actions/profile_actions';

import autoSave from '../../services/autoSave';
const profilesDefault = [
  {
    id: 0,
    name: 'Default',
    img: 'profile_sel_default.svg',
    class: 'default',
    isDefault: true,
    choose: 'active',
  },
  {
    id: 1,
    name: 'Game',
    img: 'icon_profiles_game.svg',
    class: 'game',
    isDefault: true,
    choose: '',
  },
  {
    id: 2,
    name: 'Movie',
    img: 'icon_profiles_movie.svg',
    class: 'movie',
    isDefault: true,
    choose: '',
  },
  {
    id: 3,
    name: 'Music',
    img: 'icon_profiles_music.svg',
    class: 'music',
    isDefault: true,
    choose: '',
  },
  {
    id: 4,
    name: 'Custom 1',
    img: 'profile_sel_custom.svg',
    class: 'custom',
    isDefault: false,
    choose: '',
  },
  {
    id: 5,
    name: 'demo long text demo long text demo',
    img: 'profile_sel_custom.svg',
    class: 'custom',
    isDefault: false,
    choose: '',
  },
];

const selected = 0;
const newCustom = {
  id: profilesDefault.length - 1,
  name: 'New Profile',
  img: 'profile_sel_custom.svg',
  class: 'custom',
  isDefault: false,
  choose: 'active',
};

function getProfileList() {
  return function(dispatch) {
    if (!localStorage.hasOwnProperty('profilesDefault')) {
      localStorage.setItem('profilesDefault', JSON.stringify(profilesDefault));
      localStorage.setItem('selected', selected);
    }
    return dispatch(getCurrentList());
  };
}

function chooseProfile(id) {
  return function(dispatch) {
    var list = JSON.parse(localStorage.profilesDefault);
    var oldChoose = parseInt(localStorage.selected);
    var idNum = parseInt(id.substring(id.lastIndexOf('-') + 1));
    var index = list.findIndex(i => i.id === idNum);
    console.log('index' + index);
    list[oldChoose].choose = '';
    list[index].choose = 'active';

    localStorage.setItem('profilesDefault', JSON.stringify(list));
    localStorage.setItem('selected', index);

    return dispatch(setCurrentProfile());
  };
}

function moveUp() {
  return function(dispatch) {
    var list = JSON.parse(localStorage.profilesDefault);
    var selected = JSON.parse(localStorage.selected);
    if (selected > 0) {
      var movedIndex = selected - 1;
      var movedProfile = list[movedIndex];
      var profile = list[selected];

      list[movedIndex] = profile;
      list[selected] = movedProfile;

      localStorage.setItem('profilesDefault', JSON.stringify(list));
      localStorage.setItem('selected', movedIndex);
    }
    autoSave.initAutoSave(list);
    return dispatch(switchProfile());
  };
}

function moveDown() {
  return function(dispatch) {
    var list = JSON.parse(localStorage.profilesDefault);
    var selected = JSON.parse(localStorage.selected);
    if (selected < list.length - 1) {
      var movedIndex = selected + 1;
      var movedProfile = list[movedIndex];
      var profile = list[selected];

      list[movedIndex] = profile;
      list[selected] = movedProfile;

      localStorage.setItem('profilesDefault', JSON.stringify(list));
      localStorage.setItem('selected', movedIndex);
    }
    autoSave.initAutoSave(list);
    return dispatch(switchProfile());
  };
}

function addNewProfile() {
  return function(dispatch) {
    var list = JSON.parse(localStorage.profilesDefault);
    var selected = JSON.parse(localStorage.selected);
    newCustom.id = list.length;
    list.push(newCustom);
    list[selected].choose = '';

    localStorage.setItem('profilesDefault', JSON.stringify(list));
    localStorage.setItem('selected', list.length - 1);
    autoSave.initAutoSave(list);
    return dispatch(addProfile());
  };
}

function changeProfileName(Name) {
  return function(dispatch) {
    var list = JSON.parse(localStorage.profilesDefault);
    var selected = JSON.parse(localStorage.selected);
    list[selected].name = Name;

    localStorage.setItem('profilesDefault', JSON.stringify(list));
    autoSave.initAutoSave(list);
    return dispatch(renameProfile());
  };
}

function removeProfile() {
  return function(dispatch) {
    var list = JSON.parse(localStorage.profilesDefault);
    var selected = JSON.parse(localStorage.selected);
    var nextProfile;

    if (selected === 0) {
      nextProfile = selected + 1;
    } else {
      nextProfile = selected - 1;
    }

    list[nextProfile].choose = 'active';
    list.splice(selected, 1);

    localStorage.setItem('profilesDefault', JSON.stringify(list));
    localStorage.setItem('selected', nextProfile);
    autoSave.initAutoSave(list);
    return dispatch(deleteProfile());
  };
}

export {
  getProfileList,
  chooseProfile,
  moveUp,
  moveDown,
  addNewProfile,
  changeProfileName,
  removeProfile,
};
