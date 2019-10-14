import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stat from '../Stat/Stat';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Stat label="Budget" value={budget} isPositive={budget >= 0} />
    <Stat label="Expenses" value={expenses} isPositive={expenses >= 0} />
    <Stat label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

export default Values;

Values.propTypes = {
  budget: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
};
