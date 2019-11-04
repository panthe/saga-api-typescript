import {  combineReducers, Reducer } from 'redux';
import { TodosReducer, TodosState } from './todos';

export interface ApplicationState {
  todos: TodosState
}

export const rootReducer: Reducer<ApplicationState> = 
combineReducers<ApplicationState>({todos: TodosReducer});

export default rootReducer;