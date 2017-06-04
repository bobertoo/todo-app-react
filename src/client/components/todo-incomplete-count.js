import React from 'react';
import Button from './button';

/**
 * TodoIncompleteCount component
 */
const TodoIncompleteCount = ({count, completeAllTodos}) => {
  /**
   * Base CSS class
   * @returns {ReactElement}
   */
  const baseCls = 'todoIncompleteCount';

  return (
    <div className={baseCls}>
      <div>{count}</div>
      <Button onClick={completeAllTodos} text='complete all' />
    </div>
  )
};

export default TodoIncompleteCount;
