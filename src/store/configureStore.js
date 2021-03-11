import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from "../reducers/entries.reducer";
import modalsRedux from "../reducers/modals.reducer";
import createSagaMiddleware from 'redux-saga'
import { testSaga } from "../saga/testeSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureStore = () => {
    const store = createStore(
        combineReducers({
            modals: modalsRedux,
            entries: entriesReducer,
        }),
        composeWithDevTools(
            applyMiddleware(...middlewares),
        ),

    );
    sagaMiddleware.run(testSaga);
    return store;
};

export default configureStore;