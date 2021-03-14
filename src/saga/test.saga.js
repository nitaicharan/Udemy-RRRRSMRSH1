import { call, cancel, cancelled, delay, fork, put, take, takeEvery, takeLatest } from "redux-saga/effects";

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

function* infinitySaga() {
    console.log('Start infinity saga');
    let index = 0;
    while (true) {
        index++;  
        try {
            console.log(`inside infinity loop ${index}`);
            yield delay(1000);
        } catch (error) {
            console.log('A error happened: ', error);
        } finally{
            console.log('The log was canceled? ', yield cancelled());
        }
    }
}

export function* testSagaCancelled(params) {
    yield take('TEST_MESSAGE_4');
    const handledCancel = yield fork(infinitySaga);
    yield delay(3000)
    yield cancel(handledCancel);
}

export function* testSagaTakeLatest(params) {
    yield takeLatest('TEST_MESSAGE_5',infinitySaga);
}


export function* dispatchTest() {
    let index = 0;

    // yield put({ type: 'TEST_MESSAGE_5', payload: index });    

    while (true) {
        yield delay(5000);
        yield put({ type: 'TEST_MESSAGE_5', payload: index });
        index++;
    }
}