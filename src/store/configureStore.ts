import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import  { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from './rootReducers';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

export const store: Store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);