import { Container, LoansList } from 'components/ui'
import ILoan from 'interfaces/loan';

const loansList = [
  {
    id: 1,
    amount: 15000,
    nextPayment: 324.00,
    nextPaymentDate: new Date().toDateString(),
    autoPay: false,
    remainingBalance: 14676,
    remainingPayments: 29,
  },
  {
    id: 2,
    amount: 20000,
    nextPayment: 415.00,
    nextPaymentDate: new Date().toDateString(),
    autoPay: false,
    remainingBalance: 19585,
    remainingPayments: 39,
  }
];

const Main = () => {
  return (
    <Container className="py-12">
      <h3 className="text-lg leading-6 font-medium text-gray-900">sd</h3>
      <LoansList loans={loansList} />
    </Container>
  );
};

export default Main;
