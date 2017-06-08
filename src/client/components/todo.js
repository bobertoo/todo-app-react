import React from 'react';

import Button from './button';
import TodoLink from './todo-link';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  filtered: React.PropTypes.bool,
  onClickDelete: React.PropTypes.func,
  onClickTodo: React.PropTypes.func,
  status: React.PropTypes.string,
  text: React.PropTypes.string,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  filtered: false,
  onClickDelete: noop,
  onClickTodo: noop,
  status: '',
  text: '',
};

/**
 * Todo component
 * @returns {ReactElement}
 */
const Todo = ({ filtered, onClickDelete, onClickArchive, onClickTodo, status, text }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'todo';

  const todoCls = baseCls
    + (status === 'complete' ? ' todo--status-complete' : '')
    + (status === 'archived' ? ' todo--archived' : '')
    + (filtered ? ' todo--filtered' : '');

  const archivable = status === 'complete' ? <Button extraCls='archiveButton' text="Archive" onClick={onClickArchive} /> : null

  return (
    <li className={todoCls}>
      <TodoLink text={text} onClick={onClickTodo} />
      {archivable}
      <Button extraCls='deleteButton' text="x" onClick={onClickDelete} />
    </li>
  );
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
