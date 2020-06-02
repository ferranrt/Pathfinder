import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import styles from './NavigationBar.module.scss';

export default function NavigationBar(props) {
  const [currentMode, setCurrentMode] = useState('block');
  const { onChangeMode } = props;

  const handleUpdateMode = (newMode) => {
    setCurrentMode((prev) => {
      if (prev === newMode) {
        onChangeMode('block');
        return 'block';
      }
      onChangeMode(newMode);
      return newMode;
    });
  };
  return (
    <AppBar position="static">
      <Toolbar className={styles.root}>
        <Grid container>
          <Grid item xs={6}>
            <Button
              onClick={() => handleUpdateMode('start')}
              className={classNames({
                [styles.button]: true,
                [styles.selectedButton]: currentMode === 'start'
              })}
              startIcon={<Icon>outlined_flag</Icon>}
              variant="outlined"
            >
              Set Start
            </Button>
            <Button
              onClick={() => handleUpdateMode('end')}
              className={classNames({
                [styles.button]: true,
                [styles.selectedButton]: currentMode === 'end'
              })}
              startIcon={<Icon>flag</Icon>}
              variant="outlined"
            >
              Set End
            </Button>
            <Button
              onClick={() => handleUpdateMode('erase')}
              className={classNames({
                [styles.button]: true,
                [styles.selectedButton]: currentMode === 'erase'
              })}
              variant="outlined"
              startIcon={<Icon>delete</Icon>}
            >
              Erase
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Select className={styles.select} defaultValue="null">
              <MenuItem value="null" disabled>
                Select a pathfinding method
              </MenuItem>
              <MenuItem value="bubble">Dikstra</MenuItem>
              <MenuItem value="combo">A*</MenuItem>
              <MenuItem value="cycle">BFS</MenuItem>
              <MenuItem value="dfs">DFS</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classNames(styles.button)}
              startIcon={<Icon>build</Icon>}
              variant="outlined"
            >
              Clear
            </Button>
            <Button
              className={classNames(styles.button, styles.startButton)}
              startIcon={<Icon>play_arrow</Icon>}
              variant="contained"
            >
              Run
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

NavigationBar.defaultProps = {
  onChangeMode: () => {}
};

NavigationBar.propTypes = {
  onChangeMode: PropTypes.func
};
