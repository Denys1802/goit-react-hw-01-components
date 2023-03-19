import PropTypes from 'prop-types';

export const TransactionItem = ({ item: { currency, amount, type } }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

TransactionItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
