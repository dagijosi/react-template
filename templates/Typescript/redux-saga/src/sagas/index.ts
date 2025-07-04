import { all, fork } from 'redux-saga/effects';
import exampleSaga from '../features/example/exampleSaga';

export default function* rootSaga() {
  yield all([
    fork(exampleSaga),
  ]);
}
