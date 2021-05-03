import { ILoan } from 'interfaces';

export const getLoanState = (state: any): LoanState => state && state.loan;

export const getAllLoans = (state: any): ILoan[] => getLoanState(state).loans;