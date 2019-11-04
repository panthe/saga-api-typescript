import { Reducer } from 'redux';
import {
  TodosActionsTypes,
  TodosState,
  TodoAction
} from './types';

export function createReducer<State>(
  initialState: State,
  handlers: any,
): Reducer<State> {
  return (state: State = initialState, action: any): State => {
    if (handlers[action.type]) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

const initialState: TodosState = {
  data: [],
  isLoaded: false,
  isLoading: false,
  errors: null
};

const request = (
  state: TodosState,
  action: TodoAction
) => ({
  ...state,
  ...action.payload
});

const success = (
  state: TodosState,
  action: TodoAction
) => ({
  ...state,
  ...action.payload
});

const failure = (
  state: TodosState,
  action: TodoAction
) => ({
  ...state,
  ...action.payload
});

const reducer: Reducer<TodosState> = createReducer(
  initialState,
  {
    [TodosActionsTypes.GET_TODOS_REQUEST]: request,
    [TodosActionsTypes.GET_TODOS_SUCCESS]: success,
    [TodosActionsTypes.GET_TODOS_FAILURE]: failure,
  }
)

export { reducer as TodosReducer };