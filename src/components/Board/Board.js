/* eslint-disable no-console */
import React, { useRef, useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import styles from './Board.module.scss';
import Matrix from '../Matrix/Matrix';

export default function Board(props) {
  const CELL_SIZE = 25;
  const { actionMode } = props;
  const boardRef = useRef();
  const [matrixData, setMatrixData] = useState([]);

  const handleCellPressed = (row, column) => {
    console.log(`Board Handle: ${row},${column} -  ${actionMode}`);
  };

  const initializeMatrix = (width, height, size) => {
    const rows = [];
    let ncols = Math.floor(width / size);
    ncols -= Math.floor((ncols * 2) / size) - 1;
    let nrows = Math.floor(height / size);
    nrows -= Math.floor((nrows * 2) / size);
    console.log('Rows', nrows);
    console.log('Cols', ncols);
    for (let i = 0; i < nrows; i += 1) {
      const cells = [];
      for (let j = 0; j < ncols; j += 1) {
        cells.push(['N']);
      }
      rows.push(cells);
    }
    setMatrixData(rows);
  };

  useEffect(() => {
    initializeMatrix(
      boardRef.current.clientWidth,
      boardRef.current.clientHeight,
      CELL_SIZE
    );
  }, []);
  return (
    <Paper ref={boardRef} className={styles.root}>
      <Matrix
        onCellPressed={handleCellPressed}
        data={matrixData}
        size={CELL_SIZE}
      />
    </Paper>
  );
}

Board.defaultProps = {
  actionMode: 'block'
};

Board.propTypes = {
  actionMode: PropTypes.string
};
