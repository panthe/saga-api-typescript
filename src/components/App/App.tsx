import React from 'react';
import { PropsFromState, PropsFromDispatch } from './';
import Todos from '../Todos';

type IProps = PropsFromState & PropsFromDispatch;

class App extends React.Component<IProps> { 
  handleClickActionGetTodosRequest = () => {
    this.props.actionGetTodos();
  }

  componentDidUpdate(prevProps: IProps): void {
    if (!prevProps.todos.data.length && this.props.todos.data.length){
      this.render();
    }
  }

  renderTodos(): JSX.Element{
    const todos = this.props.todos.data;
    console.log("RenderTodos", todos);

    if (todos.length>0){
      return <Todos todos={todos} />;
    }

    return <div>Todos Not Fetched Yet</div>;
  }

  render(): JSX.Element {
    return (
      <div>
        {this.renderTodos()}
        <hr />
        <button onClick={this.handleClickActionGetTodosRequest}>Launch Fetch Todos</button>
    </div>
    );
  }
}

export default App;