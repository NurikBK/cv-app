import { combineReducers } from 'redux';
import communityReducer from '../features/skills/skillsSlice';

const rootReducer = combineReducers({
  community: communityReducer,
});

export default rootReducer;
