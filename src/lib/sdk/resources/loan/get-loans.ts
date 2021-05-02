import ILoan from 'interfaces/loan';

const getLoans = (adapter, baseEndpoint) => async (): Promise<ILoan []> => {
  const loansList = [
    {
      id: 10,
      amount: 15000,
      nextPayment: 324.00,
      nextPaymentDate: new Date().toDateString(),
      autoPay: false,
      remainingBalance: 14676,
      remainingPayments: 29,
    },
    {
      id: '2',
      amount: 20000,
      nextPayment: 415.00,
      nextPaymentDate: new Date().toDateString(),
      autoPay: false,
      remainingBalance: 19585,
      remainingPayments: 39,
    }
  ];
  // const { data } = await adapter.get(baseEndpoint);
  return loansList as ILoan[];
};

export default getLoans;
