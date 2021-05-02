import { useState, FC } from 'react';

import IProps from 'interfaces/iprops';
import ILoan from 'interfaces/loan';

import ServicingDashboardSDK from 'lib/sdk';
const sdk = ServicingDashboardSDK();

interface Props extends IProps {
  data: ILoan
};

const Loan: FC<Props> = ({ data }) => {
  const [autoPay, setAutopay] = useState(data.autoPay);

  const setLoanAutoPay = () => {
    const setAutopayStatus = async () => {
      const updatedLoan = await sdk.Loan.setAutopay(!autoPay);
      setAutopay(updatedLoan.autoPay);
    };

    setAutopayStatus();
  };

  return (
    <div className="border-2 flex items-center justify-between p-2">
      <div>${ data.amount }</div>
      <div className="flex items-center">
        <button className="mr-8 border-2 bg-white shadow-md p-4" onClick={setLoanAutoPay}>Set Autopay</button>
        <p className="text-center" style={{minWidth: '150px' }}>AutoPay: { autoPay ? 'Enabled' : 'Disabled' }</p>
      </div>
    </div>
  );
};

export default Loan;
