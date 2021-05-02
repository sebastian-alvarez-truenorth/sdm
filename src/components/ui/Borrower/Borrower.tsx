import { FC } from 'react';

import IProps from 'interfaces/iprops';
import IBorrower from 'interfaces/borrower';

interface Props extends IProps {
  info: IBorrower
};

const Borrower: FC<Props> = ({ info }) => {
  return (
    <div>
      Welcome, { info.firstName }
    </div>
  );
};

export default Borrower;
