import React from 'react';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  onClick: React.PropTypes.func,
  text: React.PropTypes.string,
  extraCls: React.PropTypes.string,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  onClick: noop,
  text: '',
  extraCls: '',
};

/**
 * Button component
 * @returns {ReactElement}
 */
const Button = ({ text, onClick, extraCls }) => {
  /**
   * Base CSS class
   */
  let baseCls = 'button';
  baseCls += ` ${extraCls}`;

  return (
    <button className={baseCls} onClick={onClick}>
      {text}
    </button>
  )
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
