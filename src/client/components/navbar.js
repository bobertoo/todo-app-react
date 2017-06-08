import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Button from './button';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  filterBy: PropTypes.string,
  onClickFilter: PropTypes.func,
  archiveAllTodos: PropTypes.func,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  filterBy: '',
  onClickFilter: noop,
  archiveAllTodos: noop,
};

/**
 * Navbar component
 * @returns {ReactElement}
 */
const Navbar = ({ filterBy, onClickFilter, archiveAllTodos }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'navbar'

  let allLinkCls = `${baseCls}__item`;
  allLinkCls += filterBy === '' ? ` ${baseCls}__item--active` : '';

  let activeLinkCls = `${baseCls}__item`;
  activeLinkCls += filterBy === 'active' ? ` ${baseCls}__item--active` : '';

  let completedLinkCls = `${baseCls}__item`;
  completedLinkCls += filterBy === 'completed' ? ` ${baseCls}__item--active` : '';

  let archivedLinkCls = `${baseCls}__item`;
  archivedLinkCls += filterBy === 'archived' ? ` ${baseCls}__item--active` : '';

  return (
    <div className={baseCls}>
      <Link
        to="/"
        className={allLinkCls}
        onClick={() => onClickFilter('')}
      >
        All
      </Link>
      <Link
        to="/active"
        className={activeLinkCls}
        onClick={() => onClickFilter('active')}
      >
        Active
      </Link>
      <Link
        to="/completed"
        className={completedLinkCls}
        onClick={() => onClickFilter('completed')}
      >
        Completed
      </Link>
      <Link
        to="/archived"
        className={archivedLinkCls}
        onClick={() => onClickFilter('archived')}
      >
        Archived
      </Link>
      <Button onClick={archiveAllTodos} text='Archive all completed' />
    </div>
  );
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
