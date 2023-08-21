import PropTypes from 'prop-types';
import { TableData, TableHeader, Table, TableRow } from './TransactionHistory.styled';

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
                <TableRowItem  key={item.id}
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

const TableRowItem = ({type,amount,currency})=>{
    return(<TableRow>
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency.toUpperCase()}</TableData>
    </TableRow>);
};

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
};

TableRowItem.propTypes = {
type:PropTypes.string.isRequired,
amount:PropTypes.string.isRequired,
currency:PropTypes.string.isRequired,
};


