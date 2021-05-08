import React from 'react';
import styles from '../styles.module.css';

const arr = [
  {
    id: 'clear',
    content: 'AC'
  },
  {
    id: 'divide',
    content: '/'
  },
  {
    id: 'multiply',
    content: 'x'
  },
  {
    id: 'seven',
    content: 7
  },
  {
    id: 'eight',
    content: 8
  },
  {
    id: 'nine',
    content: 9
  },
  {
    id: 'subtract',
    content: '-'
  },
  {
    id: 'four',
    content: 4
  },
  {
    id: 'five',
    content: 5
  },
  {
    id: 'six',
    content: 6
  },
  {
    id: 'add',
    content: '+'
  },
  {
    id: 'one',
    content: 1
  },
  {
    id: 'two',
    content: 2
  },
  {
    id: 'three',
    content: 3
  },
  {
    id: 'equals',
    content: '='
  },
  {
    id: 'zero',
    content: 0
  },
  {
    id: 'decimal',
    content: '.'
  }
];

const Controls = () => {
  return (
    <div className={styles.controller}>
      {
        arr.map(i => {
          if (i.content === '/' || i.content === 'x' || i.content === '-' || i.content === '+') {
            return <div id={i.id} className={styles.operator}>{i.content}</div>;
          } else if (i.content === 'AC') {
            return <div id={i.id} className={styles.acBtn}>{i.content}</div>;
          } else if (i.content === '=') {
            return <div id={i.id} className={styles.equal}>{i.content}</div>;
          } else if (i.content === 0) {
            return <div id={i.id} className={styles.zero}>{i.content}</div>;
          }
          return <div id={i.id} className={styles.number}>{i.content}</div>;
        })
      }
    </div>
  );
}

export default Controls;
