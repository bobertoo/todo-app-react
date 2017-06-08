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
 */
const TodoIncompleteCount = ({count, completeAllTodos}) => {
  /**
   * Base CSS class
   * @returns {ReactElement}
   */
  const baseCls = 'todoIncompleteCount';
  let countSection = ''

  countSection = count !== 0 ? <Button onClick={completeAllTodos} text='Complete All' /> : ''
    // countSection = <div>{count} tasks remaining</div>
  return (
    <div className={baseCls}>
      <p>{count} task{count === 1 ? '' : 's'} remaining</p>
      {countSection}
      {/* <div>{count}</div>
      <Button onClick={completeAllTodos} text='complete all' /> */}
    </div>
  )
};

TodoIncompleteCount.propTypes = propTypes;
TodoIncompleteCount.defaultProps = defaultProps;


export default TodoIncompleteCount;
