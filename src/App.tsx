import React from 'react';

import Display from './Components/Display';
import Controls from './Components/Controls';

import styles from './styles.module.css';


function App() {
  return (
    <div id={styles.App}>
      <div className={styles.calculator}>
        <Display />
        <Controls />
      </div>
    </div>
  );
}

export default App;
