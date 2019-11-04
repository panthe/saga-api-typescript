import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../../store/todos';

type TodoProps = {
  todos: Todo[]
}

const TodosList = ({todos}: TodoProps): JSX.Element => {    
  return (
    <div>
    {todos.map((todo: Todo) => {
      return (
        <TodoItem key={todo.id} todo={todo} />
      );
    })}
    </div>
  );
};

export default TodosList;