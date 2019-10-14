import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = ({ type, name }) => (
  <StyledInput
    type={type}
    name={name}
    placeholder={name === 'amount' ? 'Type amount...' : 'Type name...'}
  />
);

export default Input;

Input.defaultProps = {
  type: ' text',
  name: '',
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
};

const StyledInput = styled.input`
  color: #171718;
  font: inherit;
  font-size: 1.2rem;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  width: 100%;
  outline: 0;

  &:focus {
    border: 1px solid #2b32b2;
  }
`;
