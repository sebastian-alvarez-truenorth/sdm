import IBorrower from 'interfaces/borrower';

const me = (adapter, baseEndpoint) => async (): Promise<IBorrower> => {
  const url = `${baseEndpoint}/me`;

  const borrower: IBorrower = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
  };

//  return adapter.get(url);
  return borrower;
};

export default me;
