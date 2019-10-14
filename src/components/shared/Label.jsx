import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = ({ children, customStyles }) => (
  <StyledLabel customStyles={customStyles}>{children}</StyledLabel>
);

Label.propTypes = {
  customStyles: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Label;

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 20px;
  color: #171718;
  cursor: pointer;
  ${props => props.customStyles}
`;
