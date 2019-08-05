import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ToolBar from './ToolBar';

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

const selected = 5;

describe('icon edit', () => {
  it('should show', () => {
    const wrapper = shallow(
      <ToolBar profilesDefault={profilesDefault} selected={selected} />
    );

    expect(wrapper.find('#profileEdit').hasClass('show')).toBe(true);
  });
});

describe('icon delete', () => {
  it('should show', () => {
    const wrapper = shallow(
      <ToolBar profilesDefault={profilesDefault} selected={selected} />
    );

    expect(wrapper.find('#profileDelete').hasClass('show')).toBe(true);
  });
});

describe('icon down', () => {
  it('should disable', () => {
    const wrapper = shallow(
      <ToolBar profilesDefault={profilesDefault} selected={selected} />
    );

    expect(wrapper.find('#profileDown').hasClass('disabled')).toBe(true);
  });
});

describe('icon up', () => {
  it('should disable', () => {
    const wrapper = shallow(
      <ToolBar profilesDefault={profilesDefault} selected={selected} />
    );

    expect(wrapper.find('#profileUp').hasClass('disabled')).toBe(false);
  });
});
