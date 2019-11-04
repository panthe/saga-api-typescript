import { connect } from 'react-redux'; 
import { Dispatch } from 'redux';
import { actionGetTodos, TodosState } from '../../store/todos';
import { State } from '../../store/applicationState';
import App from './App';

export interface PropsFromState {
  todos: TodosState
}

export interface PropsFromDispatch {
  actionGetTodos: () => void;
}

const mapStateToProps = (state: State): PropsFromState => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  actionGetTodos: () => dispatch(actionGetTodos())
});


export default connect( 
  mapStateToProps,
  mapDispatchToProps
)(App);