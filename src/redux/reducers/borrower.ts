import * as actionTypes from "../actionTypes"
import ILoan from '../../interfaces/loan';
import { IBorrower } from 'interfaces';

const initialState: IBorrower = {
  id: 0,
  firstName: "",
  lastName: "",
};

const reducer = (
  state: IBorrower = initialState,
  action: Action<IBorrower>
): IBorrower => {
  switch (action.type) {
    case actionTypes.GET_ME:
      return {
        ...state,
        ...action.payload,
      }
  }
  return state
}

export default reducer