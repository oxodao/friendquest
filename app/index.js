import React                                   from 'react';
import ReactDOM                                from 'react-dom';
import App                                     from './App';
import registerServiceWorker                   from './registerServiceWorker';
import reducer                                 from './reducers';
import {applyMiddleware, createStore, compose} from 'redux';
import Provider                                from "react-redux/src/components/Provider";
import createSagaMiddleware                    from 'redux-saga';
import localStorageMiddleware                  from './middleware/LocalStorageMiddleware';
import vSaga                                   from './saga';

const saga = createSagaMiddleware();


let middleware = [saga, localStorageMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store            = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

saga.run(vSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
