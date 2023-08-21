import PropTypes from 'prop-types';
import { TableRow, TableData } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({type,amount,currency})=>{
    return(<TableRow>
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency.toUpperCase()}</TableData>
    </TableRow>);
};

TransactionHistoryItem.propTypes = {
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
    };