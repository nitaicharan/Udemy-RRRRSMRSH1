import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from "../reducers/entries.reducer";
import modalsRedux from "../reducers/modals.reducer";

const configureStore = () => {
    return createStore(
        combineReducers({
            modals: modalsRedux,
            entries: entriesReducer,
        }),
        composeWithDevTools(),
    );
};

export default configureStore;