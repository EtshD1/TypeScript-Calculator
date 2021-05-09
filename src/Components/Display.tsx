import React from 'react';
import styles from '../styles.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/reducers';

const Display = () => {
  const input = useSelector((state: RootState) => state.input);
  const outcome = useSelector((state: RootState) => state.outcome);

  return (
    <div className={styles.screen}>
      <div className={styles.logs}>{input}</div>
      <div id='display' className={styles.display}>{outcome}</div>
    </div>
  );
}

export default Display;
