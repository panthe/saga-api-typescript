import {
  TodosActionsTypes,
  TodoAction,
  TodosState
} from './types';

export const actionGetTodos = (): TodoAction => ({
  type: TodosActionsTypes.GET_TODOS
});

export const actionGetTodosRequest = (payload: TodosState): TodoAction => ({
  type: TodosActionsTypes.GET_TODOS_REQUEST,
  payload,
});

export const actionGetTodosSuccess = (payload: TodosState): TodoAction => ({
  type: TodosActionsTypes.GET_TODOS_SUCCESS,
  payload,
});

export const actionGetTodosFailure = (payload: TodosState): TodoAction => ({
  type: TodosActionsTypes.GET_TODOS_FAILURE,
  payload
});