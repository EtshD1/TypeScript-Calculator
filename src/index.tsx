import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import reducers from './Redux/reducers'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducers);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);