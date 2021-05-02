export default interface ILoan {
  id: number,
  amount: number,
  nextPayment: number,
  nextPaymentDate: string,
  autoPay: boolean,
  remainingBalance: number,
  remainingPayments: number,
};
