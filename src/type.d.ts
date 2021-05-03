type DispatchType<T> = (args: T) => T;

type Action<T> = { type: string; payload: T };

type LoanState = {
  loans: ILoan[]
  selectedLoan?: ILoan
};
