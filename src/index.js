import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
import FoodStore from './stores/FoodStore'

const foodStore = new FoodStore()

ReactDOM.render(
  <Provider foodStore={foodStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);