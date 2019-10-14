import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BudgetForm from '../BudgetForm/BudgetFormContainer.js';
import ExpenseForm from '../ExpenseForm/ExpenseFormContainer.js';
import ExpensesTable from '../ExpensesTable/ExpensesTable';
import Values from '../Values/Values';

const App = ({ budget, expenses, removeExpense, totalExpenses, balance }) => (
  <Container>
    <BudgetForm />
    <Values budget={budget} expenses={totalExpenses} balance={balance} />
    <ExpenseForm />
    {expenses.length > 0 && (
      <ExpensesTable items={expenses} onRemove={removeExpense} />
    )}
  </Container>
);

App.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  removeExpense: PropTypes.func.isRequired,
  totalExpenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default App;

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;
