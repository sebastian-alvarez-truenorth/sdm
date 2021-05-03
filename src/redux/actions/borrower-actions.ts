import * as actionTypes from "../actionTypes"
import { IBorrower } from 'interfaces';

import ServicingDashboardSDK from 'lib/sdk';
const sdk = ServicingDashboardSDK();

export const getMe = () => async (dispatch: DispatchType<Action<IBorrower>>) => {
  const me: IBorrower = await sdk.Borrower.me();

  const action: Action<IBorrower> = {
    type: actionTypes.GET_ME,
    payload: me,
  }

  return dispatch(action);
}
