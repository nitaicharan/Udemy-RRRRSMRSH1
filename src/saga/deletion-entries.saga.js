import { call, put, take } from "@redux-saga/core/effects";
import axios from "axios";
import entryTypes from "../actions/entries.action";

export default function* deleteEntrySaga() {
    while (true) {
        const { payload } = yield take(entryTypes.REMOVE_ENTRY);
        yield call(deleteEntry, payload.id);
        yield put({ type: 'REMOVE_ENTRY_RESULT', payload: { id: payload.id } })
    }
}

async function deleteEntry(id) {
    await axios.delete(`http://localhost:3001/entries/${id}`);
    await axios.delete(`http://localhost:3001/values/${id}`);
}