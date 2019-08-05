import * as profileReducer from './profile_reducer';
import * as actionType from './../actions/actionTypes/profile';

const action = {
  type: actionType.GET_LIST_PROFILE,
};

const initialState = {
  session: null,
};

describe('profileReducer test', () => {
  it('should return the inital state', () => {
    expect(profileReducer.profileReducers(null, action)).toEqual({});
  });
});
