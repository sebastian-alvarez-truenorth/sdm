import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, LoansList, Borrower } from 'components/ui';
import ILoan from 'interfaces/loan';
import IBorrower from 'interfaces/borrower';

import { getLoans, getMe } from 'redux/actions';
import { getAllLoans } from 'redux/selectors/loans';
import { getMyData } from 'redux/selectors/borrower';

const Main = () => {
  const loans: ILoan[] = useSelector(getAllLoans);
  const borrower: IBorrower = useSelector(getMyData);
  const dispatch = useDispatch();
  const isReady = loans.length && borrower;

  useEffect(() => {
    const getInitialInfo = async () => {

      await dispatch(getLoans(1));
      await dispatch(getMe(1));
    };

    getInitialInfo();
  }, []);

  if (!isReady) return null;

  return (
    <Container className="max-w-7xl py-12">
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
