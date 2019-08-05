import * as sessionActions from './sessionActions';
import * as actionType from './actionTypes/profile';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

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
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

beforeEach(() => {
  // Runs before each test in the suite
  store.clearActions();
});

test('has a type of GET_PROFILES', async () => {
  const expected = [
    {
      type: 'GET_LIST_PROFILE',
    },
  ];

  await store.dispatch(sessionActions.getProfileList());
  console.log(store.getActions());
  expect(store.getActions()).toEqual(expected);

  //expect(sessionActions.getProfileList()).toEqual(expected);
});

test('has a type of chooseItem', async () => {
  const expected = [
    {
      type: actionType.SET_CURRENT_PROFILE,
    },
  ];

  localStorage.setItem('profilesDefault', JSON.stringify(profilesDefault));
  localStorage.setItem('selected', 0);
  await store.dispatch(sessionActions.chooseProfile('profile-1'));
  console.log(store.getActions());
  expect(store.getActions()).toEqual(expected);
});
