import * as actionTypes from "../actionTypes"
import { LoanAction } from '../actions/loanAction'
import { ILoan } from '../../interfaces/loan';

export interface LoanState {
  loan: ILoan
}

const initialState: LoanState = {
  loan: {
    id: 1,
    amount: 100
  }
}

const reducer = (
  state: LoanState = initialState,
  action: LoanAction
): LoanState => {
  switch (action.type) {
    case actionTypes.GET_LOAN:
      const newLoan: ILoan = {
        id: action.payload.id,
        amount: action.payload.amount,
      }
      return {
        ...state,
        loan: newLoan,
      }
  }
  return state
}

export default reducer
