import { combineReducers } from 'redux';
import registrationReducer from './RegisterationReducer';

const rootReducer = combineReducers({
  registration: registrationReducer
});

export default rootReducer;