import * as actionTypes from "../actionTypes"
import ILoan from '../../interfaces/loan';

const initialState: LoanState = {
  loans: []
};

const reducer = (
  state: LoanState = initialState,
  action: Action<LoanState>
): LoanState => {
  switch (action.type) {
    case actionTypes.GET_LOANS: {
      const newState: LoanState = { loans: action.payload.loans }
      return {
        ...state,
        ...newState,
      }
    }
  }
  return state
}

export default reducer
