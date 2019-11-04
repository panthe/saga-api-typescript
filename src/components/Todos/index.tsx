import React from 'react';
import TodosList from './TodosList';
import { Todo } from '../../store/todos';

type TodoProps = {
  todos: Todo[]
}

const Todos = ({todos}: TodoProps): JSX.Element => {
    return (
      <div>
        Todos ({todos.length})
        <TodosList todos={todos} />
      </div>
    );
  
  
};

export default Todos;

