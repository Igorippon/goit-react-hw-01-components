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
            {items.map(item => (
                <Line key={item.id}>
                    <Cell>{item.type}</Cell>
                    <Cell>{item.amount}</Cell>
                    <Cell>{item.currency.toUpperCase()}</Cell>
                </Line>
            ))
            }
        </tbody>
    </Table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
};


