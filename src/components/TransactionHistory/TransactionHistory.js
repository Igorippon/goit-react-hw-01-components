import PropTypes from 'prop-types';
import {  TableHeader, Table } from './TransactionHistory.styled';
import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
    return (<Table>
        <thead>
            <tr>
                <TableHeader>Type</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Currency</TableHeader>
            </tr>
        </thead>

        <tbody>
            {items.map(item => (
                <TransactionHistoryItem  key={item.id}
                   type={item.type}
                   amount={item.amount}
                    currency={item.currency}
                />
            ))
            }
        </tbody>
    </Table>
    );
};



TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
};




