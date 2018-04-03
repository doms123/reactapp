import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import  mySaga from './sagas';
import logger from 'redux-logger';
import reducers from './reducers';
import { persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware();

const middleware = [logger, sagaMiddleware];

export default createStore(
    reducers, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

sagaMiddleware.run(mySaga);