import * as actionTypes from "../actionTypes"
import { ILoan } from 'interfaces/loan';

export type LoanAction = { type: string; payload: ILoan };

export const getLoan = (loanId: number) => {
  const action: LoanAction = {
    type: actionTypes.GET_LOAN,
    payload: { id: loanId, amount: 100 },
  }

  return action;
}
