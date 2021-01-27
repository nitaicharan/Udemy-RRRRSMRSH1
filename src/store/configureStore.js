import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import entriesReducer from "../reducers/entries.reducer";
import modalsRedux from "../reducers/modals.reducer";
import { initSagas } from "../saga/index";

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
    initSagas(sagaMiddleware);
    return store;
};

export default configureStore;