import { call, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import entryTypes from '../actions/entries.action';

export default function* addEntrySaga() {
    yield takeLatest(entryTypes.ADD_ENTRY, addEntryToDB);
}

function* addEntryToDB({ payload }) {
    console.log('add entry', payload);
    yield call(addEntry, payload);
    yield call(addEntryDetails, payload);
}

async function addEntry({ id, description }) {
    await axios.post('http://localhost:3001/entries', { id, description });
}

async function addEntryDetails({ id, isExpensive, value }) {
    await axios.post('http://localhost:3001/values', { id, isExpensive, value })
}

