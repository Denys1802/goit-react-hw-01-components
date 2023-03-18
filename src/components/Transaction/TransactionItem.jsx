import PropTypes from 'prop-types';

export const TransactionItem = ({ items }) => {
  return items.map(item => {
    const { currency, id, amount, type } = item;
    return (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });
};

TransactionItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
