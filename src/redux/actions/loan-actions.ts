import * as actionTypes from "../actionTypes"

import ServicingDashboardSDK from 'lib/sdk';
const sdk = ServicingDashboardSDK();

export const getLoans = () => async (dispatch: DispatchType<Action<LoanState>>) => {
  const loans = await sdk.Loan.getAll();

  const action: Action<LoanState> = {
    type: actionTypes.GET_LOANS,
    payload: { loans },
  }

  return dispatch(action);
}
