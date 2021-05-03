import * as actionTypes from "../actionTypes"
import { ILoan } from 'interfaces';

import ServicingDashboardSDK from 'lib/sdk';
const sdk = ServicingDashboardSDK();

type Requests = [Promise<ILoan[]>];

export const getLoans = (id: number) => async (dispatch: DispatchType<Action<LoanState>>) => {
  const requests: Requests = [sdk.Loan.getAll()];
  const [loans] = await Promise.all(requests);

  const action: Action<LoanState> = {
    type: actionTypes.GET_LOANS,
    payload: { loans: loans },
  }

  return dispatch(action);
}
