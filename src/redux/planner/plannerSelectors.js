import { createSelector } from 'reselect';

export const getBudget = state => state.palenner.budget;
export const getExpenses = state => state.palenner.expense;

export const calculateTotalExpenses = createSelector(
  getExpenses,
  expenses => expenses.reduce((total, expense) => total + expense.amount, 0),
);
export const calculateBalance = createSelector(
  [getBudget, calculateTotalExpenses],
  (budget, expenses) => budget - expenses,
);
