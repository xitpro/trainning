import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ProfileList from './ProfileList';

configure({ adapter: new Adapter() });

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

describe('<ProfileList />', () => {
  it('should render seven <ProfileList /> elements', () => {
    const wrapper = shallow(
      <ProfileList profilesDefault={profilesDefault} selected={selected} />
    );
    expect(wrapper.find('.profile-item')).toHaveLength(
      profilesDefault.length + 1
    );
  });
});
