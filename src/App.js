import React, { useState } from 'react';
import styles from './App.module.scss';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Board from './components/Board/Board';

export default function App() {
  const [currentMode, setCurrentMode] = useState('block');
  const handleUpdateMode = (mode) => {
    setCurrentMode(mode);
  };
  return (
    <div className={styles.appRoot}>
      <NavigationBar onChangeMode={handleUpdateMode} />
      <Board actionMode={currentMode} />
    </div>
  );
}
