import { useState, useEffect } from 'react';

import { Container, LoansList, Borrower } from 'components/ui';
import ILoan from 'interfaces/loan';
import IBorrower from 'interfaces/borrower';

import ServicingDashboardSDK from 'lib/sdk';
const sdk = ServicingDashboardSDK();

type Requests = [Promise<ILoan []>, Promise<IBorrower>];

const Main = () => {
  const [loans, setLoans] = useState<ILoan[]>([]);
  const [borrower, setBorrower] = useState<IBorrower>();

  const isReady = loans.length && borrower;

  useEffect(() => {
    const getInitialInfo = async () => {

      const requests: Requests = [sdk.Loan.getAll(), sdk.Borrower.me()];
      const [loans, me] = await Promise.all(requests);

      setLoans(loans);
      setBorrower(me);
    };

    getInitialInfo();
  }, []);

  if (!isReady) return null;

  return (
    <Container className="py-12">
      <section>
        <h3 className="text-lg leading-6 font-medium text-gray-900">My Info</h3>
        <Borrower info={borrower} />
      </section>
      <section className="mt-8">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Loans</h3>
        <LoansList loans={loans} />
      </section>
    </Container>
  );
};

export default Main;
