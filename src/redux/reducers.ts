import { combineReducers } from 'redux';
import loanReducer from './reducers/loan';
import borrowerReducer from './reducers/borrower';

const reducers: any = combineReducers({
  loan: loanReducer,
  borrower: borrowerReducer,
});

export default reducers;
