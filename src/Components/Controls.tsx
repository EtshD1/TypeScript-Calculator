import React from 'react';
import styles from '../styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddNumber, Calculate, AddOp, EditNumber, Clear, AddDecimal } from '../Redux/actions';
import { RootState } from '../Redux/reducers';
import { calc } from '../calc';

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
  const outcome = useSelector((state: RootState) => state.outcome);
  const input = useSelector((state: RootState) => state.input);
  const dispatch = useDispatch();

  return (
    <div className={styles.controller}>
      {
        arr.map(i => {
          if (i.content === '/' || i.content === 'x' || i.content === '-' || i.content === '+') {
            return <div
              key={i.id} id={i.id}
              className={styles.operator}
              onClick={() => { dispatch(AddNumber(outcome)); dispatch(AddOp(`${i.content}`)) }}
            >
              {i.content}
            </div>;
          } else if (i.content === 'AC') {
            return <div key={i.id} id={i.id} className={styles.acBtn} onClick={() => dispatch(Clear())}>{i.content}</div>;
          } else if (i.content === '=') {
            return <div
              key={i.id}
              id={i.id}
              className={styles.equal}
              onClick={() => {
                dispatch(AddNumber(outcome));
                dispatch(Calculate(calc(input.join(""))));
              }}>
              {i.content}
            </div>;
          } else if (i.content === 0) {
            return <div key={i.id} id={i.id} className={styles.zero} onClick={() => { dispatch(EditNumber(`${i.content}`)) }}>{i.content}</div>;
          } else if (i.content === '.') {
            return <div key={i.id} id={i.id} className={styles.number} onClick={() => dispatch(AddDecimal())}>{i.content}</div>;
          }
          return <div key={i.id} id={i.id} className={styles.number} onClick={() => { dispatch(EditNumber(`${i.content}`)) }}>{i.content}</div>;
        })
      }
    </div>
  );
}

export default Controls;
