import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from "../reducers/entries.reducer";
import modalsRedux from "../reducers/modals.reducer";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureStore = () => {
    return createStore(
        combineReducers({
            modals: modalsRedux,
            entries: entriesReducer,
        }),
        composeWithDevTools(
            applyMiddleware(...middlewares),
        ),
    );
};

export default configureStore;