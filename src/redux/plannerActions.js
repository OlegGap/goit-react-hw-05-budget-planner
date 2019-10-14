export const Type = {
  ADD_BUDGET: 'ADD_BUDGET',
  ADD_EXPENSE: 'ADD_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
};

export const addBudget = value => ({
  type: Type.ADD_BUDGET,
  payload: value,
});

export const addExpense = value => ({
  type: Type.ADD_EXPENSE,
  payload: { name: value.name, amount: value.amount, id: value.id },
});

export const removeExpense = id => ({
  type: Type.REMOVE_EXPENSE,
  payload: id,
});
