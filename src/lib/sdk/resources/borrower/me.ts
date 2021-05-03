import IBorrower from 'interfaces/borrower';

const me = (adapter, baseEndpoint) => async (): Promise<IBorrower> => {
  const url = `${baseEndpoint}/me`;

  const { data } = await adapter.get(url);
  return data;
};

export default me;
