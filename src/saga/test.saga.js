import { call, delay, fork, put, take, takeEvery } from "redux-saga/effects";

function double(number) {
    return number * 2;
}

export function* testSaga() {
    while (true) {
        console.log("Start saga function");
        const store = yield take('TEST_MESSAGE')

        const a = yield call(double, 2);
        console.log(a);
        const b = yield call(double, 3);
        console.log(b);

        console.log("Finish saga function");

        console.log(store);
    }
}

export function* doNothing() {
    console.log("I'm have been called");
    yield delay(500);
    console.log("I'm doing nothing");
}

export function* testSagaFork() {
    while (true) {
        yield take('TEST_MESSAGE_2')
        yield delay(5000);
        yield fork(doNothing);
        yield fork(doNothing);
        yield fork(doNothing);
    }
}

export function* testSagaTakeEveryProcess({ payload }) {
    console.log(`Starting process for index ${payload}`);
    yield delay(3000)
    console.log(`Ending process for index ${payload}`);
}

export function* testSagaTakeEvery() {
    const { payload } = yield takeEvery('TEST_MESSAGE_3', testSagaTakeEveryProcess);
    console.log(`Finished TakeEvery for index ${payload}`);
}

export function* dispatchTest() {
    let index = 0;
    while (true) {
        yield delay(500);
        yield put({ type: 'TEST_MESSAGE_3', payload: index })
        index++;
    }
}