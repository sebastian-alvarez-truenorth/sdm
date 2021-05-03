import { useSelector } from 'react-redux';

import IBorrower from 'interfaces/borrower';
import { getMyData } from 'redux/selectors/borrower';

const Borrower = () => {
  const borrower: IBorrower = useSelector(getMyData);

  return (
    <div>
      Welcome, { borrower.firstName }
    </div>
  );
};

export default Borrower;
