// import * as testSaga from "./test.saga";
import * as entriesSagaDeletion from "../saga/deletion-entries.saga";
import * as entriesSagaAdd from "./add-entries.saga";
import * as entriesSaga from "./entries.saga";

export function initSagas(sagaMiddleware) {
    // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSagaDeletion).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSagaAdd).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}