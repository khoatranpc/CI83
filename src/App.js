import TodoList from './components/TodoList';
import './App.css';

const todoItem = [
  {
    todoName: 'Đi nấu cơm',
    des: 'ABCXYZKLHASDS',
    status: false
  },
  {
    todoName: 'Đi nấu cơm',
    des: 'ABCXYZKLHASDS',
    status: true
  },
  {
    todoName: 'Đi nấu cơm',
    des: 'ABCXYZKLHASDS',
    status: false
  },
  {
    todoName: 'Đi nấu cơm',
    des: 'ABCXYZKLHASDS',
    status: false
  },
]

function App() {
  return (
    <div className="App">
      <TodoList todo={todoItem} />
    </div>
  );
}

export default App;
