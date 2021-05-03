type DispatchType<T> = (args: T) => T;

type Requests<T> = [Promise<T>];

type GetStateType = () => StateType;

type StateType = {
  loan:LoanState,
  borrower:IBorrower,
};

type Action<T> = { type: string; payload: T };

type LoanState = {
  loans?: ILoan[]
  selectedLoan?: ILoan
};
