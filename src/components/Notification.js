import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ text }) => <span>{text}</span>;

export default Notification;

Notification.propTypes = { text: PropTypes.string.isRequired };
