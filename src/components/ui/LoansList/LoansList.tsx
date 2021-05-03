import { useSelector } from 'react-redux';

import ILoan from 'interfaces/loan';
import { getAllLoans } from 'redux/selectors/loans';

import Loan from 'components/ui/Loan';

const LoansList = () => {
  const loans: ILoan[] = useSelector(getAllLoans);

  return (
    <div>
      {
        loans.map((l) => <Loan key={l.id} data={l}/>)
      }
    </div>
  );
};

export default LoansList;
