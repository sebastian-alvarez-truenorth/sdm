import * as actionTypes from "../actionTypes"
import { IBorrower } from 'interfaces';

import ServicingDashboardSDK from 'lib/sdk';
const sdk = ServicingDashboardSDK();

// const loan: ILoan = {
//   id: 2,
//   amount: 20000,
//   nextPayment: 415.00,
//   nextPaymentDate: new Date().toDateString(),
//   autoPay: false,
//   remainingBalance: 19585,
//   remainingPayments: 39,
// };

export const getMe = () => async (dispatch: DispatchType<Action<IBorrower>>) => {
  const me = await sdk.Borrower.me();

  const action: Action<IBorrower> = {
    type: actionTypes.GET_ME,
    payload: me,
  }

  return dispatch(action);
}
