import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Index from './index';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)', () => {
  const initialState = {
    profilesDefault: [
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
    ],
    selected: 0,
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const container = shallow(<Index store={store} />);

  // beforeEach(() => {
  //   store = mockStore(initialState);
  //   container = shallow(<Index store={store} />);
  // });

  it('+++ check Prop matches with initialState', () => {
    // console.log(container);
    console.log(container.props());
    expect(container.find('Index').props().store).toEqual(
      initialState.profilesDefault
    );
  });

  // it('+++ check Prop matches with initialState', () => {
  //   console.log(container);
  //   expect(container.find('Index').state().showDeleteCfm).toEqual(false);
  // });

  // it('+++ check Prop matches with RightSide', () => {
  //   container.setState({ nameProfileSelected: 'aa' });
  //   expect(container.find('RightWindow').prop('nameProfileSelected')).toEqual(
  //     'aa'
  //   );
  // });
});
