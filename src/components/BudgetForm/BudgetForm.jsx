import React from 'react';
import PropTypes from 'prop-types';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

const BudgetForm = ({ onSave }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSave(Number(e.target.querySelector('input').value));
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label customStyles={labelStyles}>
        Enter your total budget
        <Input type="number" name="amount" />
      </Label>

      <Button label="Save" type="submit" />
    </Form>
  );
};

BudgetForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default BudgetForm;
