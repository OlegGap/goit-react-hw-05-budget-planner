export const Type = {
  ADD_BUDGET: 'ADD_BUDGET',
  ADD_EXPENSE: 'ADD_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
};

export const addBudget = value => ({ type: Type.ADD_BUDGET, payload: value });

export const addExpense = value => ({ type: Type.ADD_EXPENSE, payload: value });

export const removeExpense = value => ({
  type: Type.REMOVE_EXPENSE,
  payload: value,
});
