import ILoan from 'interfaces/loan';

const getLoans = (adapter, baseEndpoint) => async (): Promise<ILoan []> => {
  const { data } = await adapter.get(baseEndpoint);
  return data;
};

export default getLoans;
