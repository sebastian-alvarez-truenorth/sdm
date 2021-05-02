import { combineReducers } from 'redux';
import loanReducer from './reducers';

const reducers: any = combineReducers({
  loan: loanReducer,
});

export default reducers;
