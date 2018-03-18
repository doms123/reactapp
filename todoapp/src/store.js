import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas';
import logger from 'redux-logger';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();


export default createStore(reducers, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(watcherSaga);