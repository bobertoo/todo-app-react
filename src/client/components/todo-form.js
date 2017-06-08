import React, { PropTypes } from 'react';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  onSubmit: React.PropTypes.func,
  onChange: React.PropTypes.func,
  input: PropTypes.string,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  onSubmit: noop,
  onChange: noop,
  input: '',
};

/**
* TodoForm component
* @returns {ReactElement}
*/
const TodoForm = ({ onSubmit, onChange, input }) => {

  return (
    <div className='todo-form'>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          placeholder="Add new todo..."
          value={input}
        />
      </form>
    </div>
  );
}

TodoForm.propTypes = propTypes;
TodoForm.defaultProps = defaultProps;

export default TodoForm;
