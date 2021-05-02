import getLoans from './get-loans';
import setAutopay from './set-autopay';

const Loan = (transports) => {
  const { rest } = transports;
  const baseEndpoint = '/loan';

  return ({
    getAll: () => getLoans(rest, baseEndpoint)(),
    setAutopay: (status) => setAutopay(rest, baseEndpoint)(status),
  });
};

export default Loan;
