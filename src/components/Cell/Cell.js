import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Cell.module.scss';

export default function Cell(props) {
  const { size, row, column, type, onClicked } = props;
  let label = 'N';
  /* 
  Cell types:
  - normal:
  - visited:
  - wall:
  - start:
  - end:
   */
  switch (type) {
    case 'visited':
      label = 'X';
      break;
    case 'wall':
      label = 'W';
      break;
    case 'start':
      label = 'S';
      break;
    case 'end':
      label = 'E';
      break;
    default:
      label = 'N';
  }

  const handleCellPressed = () => {
    onClicked(row, column);
  };

  return (
    <button
      onClick={() => handleCellPressed()}
      type="button"
      className={classNames(styles.root)}
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      {label}
    </button>
  );
}

Cell.defaultProps = {
  size: 15,
  row: 0,
  column: 0,
  type: 'normal',
  onClicked: () => {}
};

Cell.propTypes = {
  size: PropTypes.number,
  row: PropTypes.number,
  column: PropTypes.number,
  type: PropTypes.string,
  onClicked: PropTypes.func
};
