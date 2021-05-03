import { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import IProps from 'interfaces/iprops';
import ILoan from 'interfaces/loan';

import { SwitchButton } from 'components/common';
import { setAutopay } from 'redux/actions/loan-actions';

import ServicingDashboardSDK from 'lib/sdk';
import { getSelectedLoan } from 'redux/selectors/loans';

const sdk = ServicingDashboardSDK();

interface Props extends IProps {
  data: ILoan
};

const Loan: FC<Props> = ({ data }) => {
  const [loan] = useState<ILoan>(data);
  const dispatch = useDispatch();

  const setLoanAutoPay = () => {
    const setAutopayStatus = async () => {
      dispatch(setAutopay(loan.id, !loan.autoPay));
    };

    setAutopayStatus();
  };

  return (
    <Link to="/dashboard">
      <div className="border-2 flex items-center justify-between p-2">
        <div>${ data.amount }</div>
        <div className="flex items-center py-4">
          <SwitchButton enabled={loan.autoPay} onChange={setLoanAutoPay} title={"Set Autopay"} titleDetail={loan.autoPay ? '(Enabled)' : '(Disabled)'}/>
        </div>
      </div>
    </Link>
  );
};

export default Loan;
