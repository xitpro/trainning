import { combineReducers } from 'redux';
import { profileReducers } from './profile_reducer';

export default combineReducers({
  profile: profileReducers,
});
