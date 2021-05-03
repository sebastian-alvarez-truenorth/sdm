import MockAdapter from 'axios-mock-adapter';

const borrowerMeOkResponse = [
  200,
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
  }
];

const loansOkResponse = [
  200,
  [
    {
      id: 1,
      amount: 15000,
      nextPayment: 324.00,
      nextPaymentDate: new Date().toDateString(),
      autoPay: false,
      remainingBalance: 14676,
      remainingPayments: 29,
    },
    {
      id: 2,
      amount: 20000,
      nextPayment: 415.00,
      nextPaymentDate: new Date().toDateString(),
      autoPay: false,
      remainingBalance: 19585,
      remainingPayments: 39,
    }
  ]
];

const registerMock = (axiosCore) => {
  const mock = new MockAdapter(axiosCore, { delayResponse: 750 });

  mock.onGet('/borrower/me').reply(
    () => borrowerMeOkResponse
  );

  mock.onGet('/loan').reply(
    () => loansOkResponse
  );
};

export default registerMock;
