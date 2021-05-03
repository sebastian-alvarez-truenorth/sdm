import { ILoan } from 'interfaces';

export const getLoanState = (state: StateType): LoanState => state && state.loan;

export const getAllLoans = (state: StateType): ILoan[] => getLoanState(state).loans || [];

export const getSelectedLoan = (state: StateType): ILoan => getLoanState(state).selectedLoan;