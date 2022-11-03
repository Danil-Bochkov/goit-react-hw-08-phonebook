import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ 
    items
}) => { 
    return (
        <table className={css.transactionHistory}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
                {items.map(({ type, amount, currency, id }) =>
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>)}      
        </tbody>
        </table>
    )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({type : PropTypes.string, amount: PropTypes.string, currency: PropTypes.string})),
}

export default TransactionHistory;