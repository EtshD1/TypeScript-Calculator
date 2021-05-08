import React from 'react';
import styles from '../styles.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/reducers';

const Display = () => {
  const mainNumber = useSelector((state: RootState) => state.main);

  return (
    <div id="display" className={styles.display}>
      <div className={styles.logs}></div>
      <div className={styles.mainDisplay}>{mainNumber}</div>
    </div>
  );
}

export default Display;
