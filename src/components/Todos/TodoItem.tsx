import React from 'react';
import { Todo } from '../../store/todos';

interface Props {
  todo: Todo
}

const TodoItem = ({todo}: Props): JSX.Element => {
  return (
    <div>
      <h3>{todo.title}</h3>      
    </div>
  );
};

export default TodoItem;