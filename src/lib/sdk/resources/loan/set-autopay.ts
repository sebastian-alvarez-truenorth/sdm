import ILoan from 'interfaces/loan';

const setAutopay = (adapter, baseEndpoint) => async (status: boolean): Promise<ILoan> => {
  const updatedLoan: ILoan = {
    id: 10,
    amount: 15000,
    nextPayment: 324.00,
    nextPaymentDate: new Date().toDateString(),
    autoPay: status,
    remainingBalance: 14676,
    remainingPayments: 29,
  };

  return updatedLoan;
};

export default setAutopay;
