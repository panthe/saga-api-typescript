import { combineReducers } from 'redux';
import { TodosReducer, TodosState } from './todos';

export interface State {
  todos: TodosState
}

export const rootReducer = () => combineReducers<State>({
  todos: TodosReducer
});