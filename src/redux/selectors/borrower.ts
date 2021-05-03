import { IBorrower } from 'interfaces';

export const getMyData = (state: any): IBorrower => state && state.borrower;