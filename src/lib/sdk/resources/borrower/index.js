import me from './me';

const Borrower = (transports) => {
  const { rest } = transports;
  const baseEndpoint = '/borrower';

  return ({
    me: () => me(rest, baseEndpoint)(),
  });
};

export default Borrower;
