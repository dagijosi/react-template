import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchData, fetchDataSuccess, fetchDataFailure } from './exampleSlice';
import { handleApiErrors } from '../../utils/handleApiErrors';
import { CustomError } from '../../utils/errorHandler';

// Helper function to make the API call and parse JSON
async function fetchApi(url: string) {
  const response = await fetch(url);
  const handledResponse = handleApiErrors(response, 'Failed to fetch data');
  return await handledResponse.json();
}

function* fetchDataSaga(): Generator<any, void, any> {
  try {
    // The fetchData action creator is already dispatched to trigger this saga.
    // The corresponding reducer handles setting the loading state.
    const data = yield call(fetchApi, 'https://jsonplaceholder.typicode.com/todos/1');
    yield put(fetchDataSuccess(data));
  } catch (error: any) {
    // Use a more robust error message, including the error's message property if it exists
    const errorMessage = error instanceof CustomError ? error.message : 'Failed to fetch data';
    yield put(fetchDataFailure(errorMessage));
  }
}

function* exampleSaga() {
  // Use the action creator's type property for better type safety and maintainability
  yield takeEvery(fetchData.type, fetchDataSaga);
}

export default exampleSaga;
