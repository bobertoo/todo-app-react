import React, { PropTypes } from 'react';

import Button from './button';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  count: PropTypes.number,
  completeAllTodos: PropTypes.func,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  count: 0,
  updateTodos: noop,
};

/**
 * TodoIncompleteCount component
 * @returns {ReactElement}
 */
const TodoIncompleteCount = ({count, completeAllTodos}) => {
  /**
   * Base CSS class
   */
  const baseCls = 'todoIncompleteCount';

  /**
   * Show Button {ReactElement} if count is > 0
   */
  const countSection = count !== 0 ? <Button onClick={completeAllTodos} text='Complete All' /> : ''

  return (
    <div className={baseCls}>
      <p>{count} task{count === 1 ? '' : 's'} remaining</p>
      {countSection}
    </div>
  )
};

TodoIncompleteCount.propTypes = propTypes;
TodoIncompleteCount.defaultProps = defaultProps;


export default TodoIncompleteCount;
