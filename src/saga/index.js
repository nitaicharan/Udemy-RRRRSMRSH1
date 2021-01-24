// import * as testSaga from "./testeSaga";
import * as entriesSaga from "./entries.saga";

export function initSagas(sagaMiddleware) {
    // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}