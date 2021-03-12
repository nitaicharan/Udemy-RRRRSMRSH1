import { take } from "redux-saga/effects";
import entriesTypes from "../actions/entries.action";

export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES);
    console.log('I need to get the entries now');
}