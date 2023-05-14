import { combineReducers } from 'redux';
import skillsReducer from '../features/skills/skillsSlice';
import timelineReducer from '../features/timeline/timelineSlice';

const rootReducer = combineReducers({
  skills: skillsReducer,
  timeline: timelineReducer,
});

export default rootReducer;
