import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BudgetForm from '../BudgetForm/BudgetFormContainer.js';
import ExpenseForm from '../ExpenseForm/ExpenseFormContainer.js';
import ExpensesTable from '../ExpensesTable';
import Values from '../Values';

const calculateTotalExpenses = expenses => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};
const calculateBalance = (budget, expenses) => budget - expenses;

const App = ({ budget, expenses, removeExpense }) => {
  const totalExpenses = calculateTotalExpenses(expenses);
  const balance = calculateBalance(budget, totalExpenses);
  return (
    <Container>
      <BudgetForm />
      <Values budget={budget} expenses={totalExpenses} balance={balance} />
      <ExpenseForm />
      {expenses.length > 0 && (
        <ExpensesTable items={expenses} onRemove={removeExpense} />
      )}
    </Container>
  );
};

App.propTypes = {
  budget: PropTypes.string.isRequired,
  expenses: PropTypes.string.isRequired,
  removeExpense: PropTypes.func.isRequired,
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
