import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container, LoansList, Borrower } from 'components/ui';

import { getLoans, getMe } from 'redux/actions';

const Main = () => {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const getInitialInfo = async () => {

      await dispatch(getLoans());
      await dispatch(getMe());

      setIsReady(true);
    };

    getInitialInfo();
  }, []);

  if (!isReady) return null;

  return (
    <Container className="max-w-7xl py-12">
      <section>
        <h3 className="text-lg leading-6 font-medium text-gray-900">My Info</h3>
        <Borrower />
      </section>
      <section className="mt-8">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Loans</h3>
        <LoansList />
      </section>
    </Container>
  );
};

export default Main;
