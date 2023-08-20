import PropTypes from 'prop-types';
import { Cell, HeaderCell, Line, Table } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (<Table>
        <thead>
            <tr>
                <HeaderCell>Type</HeaderCell>
                <HeaderCell>Amount</HeaderCell>
                <HeaderCell>Currency</HeaderCell>
            </tr>
        </thead>

        <tbody>
            {items.map(item => {
              return (<TableRow
                 key = {item.id}
                 type={item.type}
                 currency={item.currency}
                 amount={item.amount}
                />); 
            })
            }
        </tbody>
    </Table>
    );
}

const TableRow = ({type, amount,currency}) =>{
    return (<Line >
        <Cell>{type}</Cell>
        <Cell>{amount}</Cell>
        <Cell>{currency.toUpperCase()}</Cell>
        </Line> );
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
};

TableRow.propTypes = {
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
}


