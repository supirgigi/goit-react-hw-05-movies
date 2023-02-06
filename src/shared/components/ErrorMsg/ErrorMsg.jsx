import PropTypes from 'prop-types';

import styles from './error-msg.module.css';

const ErrorMsg = ({ error }) => {
  return <p className={styles.text}>{error}</p>;
};

ErrorMsg.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMsg;
