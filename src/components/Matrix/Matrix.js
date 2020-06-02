import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Matrix.module.scss';
import Cell from '../Cell/Cell';

export default function Matrix(props) {
  const [matrixRender, setMatrixRender] = useState(null);
  const { data, size, onCellPressed } = props;
  const renderMatrix = () => {
    const rows = [];
    for (let i = 0; i < data.length; i += 1) {
      const cells = [];
      for (let j = 0; j < data[i].length; j += 1) {
        cells.push(
          <Cell
            onClicked={onCellPressed}
            row={i}
            column={j}
            key={`${i}-${j}`}
            size={size}
          />
        );
      }
      rows.push(
        <div key={`row${i}`} className={styles.row}>
          {cells}
        </div>
      );
    }
    setMatrixRender(<div className={styles.matrix}>{rows}</div>);
  };
  useEffect(() => {
    renderMatrix();
  }, [data, size, onCellPressed]);

  return <div>{matrixRender}</div>;
}

Matrix.defaultProps = {
  data: [],
  size: 25,
  onCellPressed: () => {}
};
Matrix.propTypes = {
  data: PropTypes.instanceOf(Array),
  size: PropTypes.number,
  onCellPressed: PropTypes.func
};
