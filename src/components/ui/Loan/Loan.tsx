import { FC } from 'react';

import IProps from 'interfaces/iprops';
import ILoan from 'interfaces/loan';

interface Props extends IProps {
  data: ILoan
};

const Loan: FC<Props> = ({ data }) => {
  return (
    <div>
      {
        data.amount
      }
    </div>
  );
};

export default Loan;
