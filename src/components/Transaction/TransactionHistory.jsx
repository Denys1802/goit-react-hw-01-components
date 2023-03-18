import { TransactionItem } from './TransactionItem';
import { TransactionTable, TransactionTbody } from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <TransactionTbody>
        <TransactionItem items={items} />
      </TransactionTbody>
    </TransactionTable>
  );
};
