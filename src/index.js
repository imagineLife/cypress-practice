import React from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { rootSaga } from './sagas/TodoSagas';
import App from './components/App';
import reducer from './reducers';
import 'todomvc-app-css/index.css';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

// allow the store to be accessible when testing with Cypress
if (window.Cypress) {
  window.store = store;
}

render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('app'),
);
