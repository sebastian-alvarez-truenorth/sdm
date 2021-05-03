import * as actionTypes from "../actionTypes"
import { ILoan } from 'interfaces';

import ServicingDashboardSDK from 'lib/sdk';
const sdk = ServicingDashboardSDK();

export const getLoans = () => async (dispatch: DispatchType<Action<LoanState>>) => {
  const loans: ILoan[] = await sdk.Loan.getAll();



  const action: Action<LoanState> = {
    type: actionTypes.GET_LOANS,
    payload: { loans },
  }

  return dispatch(action);
}

export const setSelectedLoan = (loanId: number) => async (dispatch: DispatchType<Action<LoanState>>, getState: GetStateType) => {
  const loan: ILoan = getState()?.loan?.loans?.find(l => l.id === loanId);

  const action: Action<LoanState> = {
    type: actionTypes.SET_SELECTED_LOAN,
    payload: { selectedLoan: loan },
  }

  return dispatch(action);
}

export const setAutopay = (loanId: number, statusAutoPay: boolean) => async (dispatch: DispatchType<Action<LoanState>>, getState: GetStateType) => {
  const loan: ILoan = await sdk.Loan.setAutopay(loanId, statusAutoPay);

  const loans = getState()?.loan?.loans?.filter((l: ILoan) => l.id !== loan.id);
  loans?.push(loan);

  const action: Action<LoanState> = {
    type: actionTypes.SET_LOAN_AUTOPAY_STATUS,
    payload: { loans: loans },
  }

  return dispatch(action);
}