import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { api, getApiPromise } from '../helpers/api';
import Navbar from './navbar';
import TodoIncompleteCount from './todo-incomplete-count';
import TodoForm from './todo-form';
import Todos from './todos';

/**
 * TodosPage component
 * @class
 */
class TodosPage extends Component {
  /**
   * Base CSS class
   * @static
   */
  static baseCls = 'todos-page'

  /**
   * Prop types
   * @static
   */
  static propTypes = {
    params: PropTypes.object,
  };

  /**
   * Constructor
   * @constructor
   *
   * @param  {object} props - Props
   */
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      filterBy: props.params.filter,
      input: '',
    };

    this.addTodo = this.addTodo.bind(this);
    this.postTodo = this.postTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.setFilterBy = this.setFilterBy.bind(this);
    this.updateTodos = this.updateTodos.bind(this);
    this.countActiveTodos = this.countActiveTodos.bind(this);
    this.completeAllTodos = this.completeAllTodos.bind(this);
    this.archiveAllTodos = this.archiveAllTodos.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.putTodo = this.putTodo.bind(this);
  }

  /**
   * Grab todos when component mounts
   */
  componentDidMount() {
    api('GET', null, this.updateTodos);
  }

  /**
   * Add todo
   *
   * @param  {string} text - Todo text
   */
  addTodo(text) {
    if (!text.trim()) {
      return;
    }

    api('POST', { text }, this.postTodo);
  }

  /**
   * Update todo
   *
   * @param  {object} todo - Todo item
   */
  completeTodo(todo) {
    api('PUT', {...todo}, this.putTodo);
  }

  /**
   * Posts new todo to the todos collection
   *
   * @param  {object} json - Resulting JSON from fetch
   */
  postTodo(json) {
    this.setState({
      todos: [...json],
    });
  }

  /**
   * Callback function to replace todo with results of fetching the todo PUT endpoint
   *
   * @param  {object} json - Resulting JSON from fetch
   */
  putTodo(json) {
    const index = this.state.todos.findIndex(todo =>
      todo.id === json.id
    );

    this.updateTodos(
      [
        ...this.state.todos.slice(0, index),
        json,
        ...this.state.todos.slice(index + 1),
      ]
    );
  }

  /**
   * Set filterBy state
   *
   * @param {string} filterBy - filterBy state
   */
  setFilterBy(filterBy) {
    this.setState({ filterBy });
  }

  /**
   * Grab todos array state
   *
   * @param  {Array} todos - Array of todo objects
   */
  updateTodos(todos) {
    this.setState({ todos });
  }

  /**
   * Return active todos length
   */
  countActiveTodos() {
    let activeTodos = this.state.todos.filter(todo =>
      todo.status !== 'complete' &&
        todo.status !== 'archived'
    )
    return activeTodos.length;
  }

  /**
   * Add complete status to all active todos
   */
  completeAllTodos() {
    let todos = this.state.todos.forEach(todo =>
      todo.status === 'complete' ||
        todo.status === 'archived' ?
        todo :
        this.completeTodo({...todo, status: 'complete'})
    )
  }

  /**
   * Add archived status to all completed todos
   */
  archiveAllTodos() {
    let todos = this.state.todos.forEach(todo =>
      todo.status === 'complete' ?
      this.completeTodo({...todo, status: 'archived'}) :
      todo
    )
  }

  /**
   * On change handler for input field
   * @param  {object} e - Event object
   */
  onChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  /**
   * On submit handler for submitting form
   * @param  {object} e - Event object
   */
  onSubmit(e) {
    e.preventDefault();
    this.addTodo(this.state.input);
    this.setState({input: ''});
  }

  /**
   * Render
   * @returns {ReactElement}
   */
  render() {
    return (
      <div className={this.baseCls}>
        <Navbar
          filterBy={this.state.filterBy}
          onClickFilter={this.setFilterBy}
          archiveAllTodos={this.archiveAllTodos}
        />

        <TodoIncompleteCount
          count={this.countActiveTodos()}
          completeAllTodos={this.completeAllTodos}
        />

        <TodoForm input={this.state.input} onSubmit={this.onSubmit} onChange={this.onChange} />

        <Todos
          filterBy={this.state.filterBy}
          updateTodos={this.updateTodos}
          todos={this.state.todos}
          putTodo={this.putTodo}
        />
      </div>
    );
  }
}

export default TodosPage;
