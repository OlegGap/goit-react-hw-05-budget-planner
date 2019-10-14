import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Stat = ({ label, value, isPositive }) => (
  <Container isPositive={isPositive}>
    <Label>{label}</Label>
    <Value>{value}&nbsp;&#x24;</Value>
  </Container>
);

Stat.defaultProps = {
  isPositive: true,
};
Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  isPositive: PropTypes.bool,
};

export default Stat;

const Container = styled.div`
  text-align: center;
  padding: 8px 24px;
  color: ${props => (props.isPositive ? '#388E3C' : '#D32F2F')};
  user-select: none;
`;

const Label = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 24px;
`;

const Value = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 48px;
`;
