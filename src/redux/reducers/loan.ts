import * as actionTypes from "../actionTypes"
import { LoanAction } from '../actions/loanAction'
import ILoan from '../../interfaces/loan';

const loan: ILoan = {
  id: 2,
  amount: 20000,
  nextPayment: 415.00,
  nextPaymentDate: new Date().toDateString(),
  autoPay: false,
  remainingBalance: 19585,
  remainingPayments: 39,
};

export interface LoanState {
  loan: ILoan
}

const initialState: LoanState = {
  loan
};

const reducer = (
  state: LoanState = initialState,
  action: LoanAction
): LoanState => {
  switch (action.type) {
    case actionTypes.GET_LOAN:
      const newLoan: ILoan = {
        id: action.payload.id,
        amount: action.payload.amount,
        nextPayment: action.payload.nextPayment,
        nextPaymentDate: action.payload.nextPaymentDate,
        autoPay: action.payload.autoPay,
        remainingBalance: action.payload.remainingBalance,
        remainingPayments: action.payload.remainingPayments,
      };

      return {
        ...state,
        loan: newLoan,
      }
  }
  return state
}

export default reducer
