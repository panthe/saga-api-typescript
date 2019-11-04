export interface Todo {
  "id": number,
  "userId": number,
  "title": string,
  "completed": boolean
}

export interface TodosState {
  readonly data: Todo[];
  readonly isLoaded: boolean;
  readonly isLoading: boolean;
  readonly errors: string[] | null;
}

export enum TodosActionsTypes {
  GET_TODOS = 'trigger/GET_TODOS',
  GET_TODOS_REQUEST = 'event/GET_TODOS_REQUEST',
  GET_TODOS_SUCCESS = 'event/GET_TODOS_SUCCESS',
  GET_TODOS_FAILURE = 'event/GET_TODOS_FAILURE',
}

export interface TodoAction {
  type: TodosActionsTypes;
  payload?: TodosState;
  error?: string[];
}