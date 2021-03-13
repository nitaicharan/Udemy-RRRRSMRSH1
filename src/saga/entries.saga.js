import axios from "axios";
import { call, fork, put, take } from "redux-saga/effects";
import entriesTypes from "../actions/entries.action";

export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES);
    console.log('I need to get the entries now');
    const result = yield call(axios, 'http://localhost:3001/entries');
    yield put({ type: entriesTypes.POPULATE_ENTRIES, payload: result.data });
}

export function* getEntryDetails(id) {
    const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
    console.log(data);
}

export function* getAllEntriesDetails(params) {
    const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);

    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index];
        yield fork(getEntryDetails, entry.id);
    }
}