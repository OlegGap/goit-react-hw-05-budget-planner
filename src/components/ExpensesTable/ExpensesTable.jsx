import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../shared/Button';

const ExpensesTable = ({ items, onRemove }) => (
  <Table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, name, amount }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <Button label="Delete" onClick={() => onRemove(id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default ExpensesTable;

ExpensesTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  onRemove: PropTypes.func.isRequired,
};

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;
