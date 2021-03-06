import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
import checkInputExpense from '../../utils/checkInputExpense.js';

const labelStyles = `
  margin-bottom: 16px;  
`;

const ExpenseForm = ({ balance, onSave }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const resultInput = {
      name: e.target.querySelector('input[name="name"]').value,
      amount: Number(e.target.querySelector('input[name="amount"]').value),
      id: shortid.generate(),
    };
    if (checkInputExpense(resultInput.amount, balance)) onSave(resultInput);
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label customStyles={labelStyles}>
        Enter expense name
        <Input type="text" name="name" />
      </Label>
      <Label customStyles={labelStyles}>
        Enter expense amount
        <Input type="number" name="amount" />
      </Label>

      <Button label="Add" type="submit" />
    </Form>
  );
};

ExpenseForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
};

export default ExpenseForm;
