import { FC } from 'react';

import IProps from 'interfaces/iprops';
import ILoan from 'interfaces/loan';

import Loan from 'components/ui/Loan';

interface Props extends IProps {
  loans: ILoan[]
};

const LoansList: FC<Props> = ({ loans }) => {
  return (
    <div>
      {
        loans.map((l) => <Loan key={l.id} data={l}/>)
      }
    </div>
  );
};

export default LoansList;
