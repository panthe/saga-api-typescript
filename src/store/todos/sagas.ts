import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { Todo, TodoAction } from './types';
import { getTodos } from '../../api/v1/jsonPlaceHolder';
import {
  actionGetTodosRequest,
  actionGetTodosSuccess,
  actionGetTodosFailure
} from './actions';


export function* sagas(
  action: TodoAction
) {
  yield put(
    actionGetTodosRequest({
      data: [],
      isLoading: true,
      isLoaded: false,
      errors: null
    })
  );

  try {
    const payload: AxiosResponse = yield call(getTodos);
    const data: Todo[] = payload.data;

    return yield put(
      actionGetTodosSuccess({
        data: data,
        isLoading: false,
        isLoaded: true,
        errors: null
      })
    );
  } catch (error) {
    return yield put(
      actionGetTodosFailure({
        data: [],
        isLoading: false,
        isLoaded: false,
        errors: [error]
      })
    );
  }
}