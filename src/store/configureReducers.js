import { combineReducers, createStore } from "redux";
import entriesReducer from "../reducers/entries.reducer";

export default () => {
    return createStore(
        combineReducers({
            entries: entriesReducer,
        })
    );
};
