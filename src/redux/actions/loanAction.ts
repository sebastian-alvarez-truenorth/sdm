import * as actionTypes from "../actionTypes"
import ILoan from 'interfaces/loan';

export type LoanAction = { type: string; payload: ILoan };

const loan: ILoan = {
  id: 2,
  amount: 20000,
  nextPayment: 415.00,
  nextPaymentDate: new Date().toDateString(),
  autoPay: false,
  remainingBalance: 19585,
  remainingPayments: 39,
};

export const getLoan = (loanId: number) => {
  const action: LoanAction = {
    type: actionTypes.GET_LOAN,
    payload: loan,
  }

  return action;
}
