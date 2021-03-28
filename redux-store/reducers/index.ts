import { combineReducers } from 'redux';
import { userReducer as users } from './users';

const rootReducer = combineReducers({
	users,
});

export default rootReducer;
