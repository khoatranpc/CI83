import React, { useState } from 'react';
import ShowItem from './ShowItem';
import { v4 as randomId } from 'uuid';
import './style.css';

const initTodo = {
    todoTitle: '',
    des: '',
    status: false,
    id: ''
}
const TodoList = (props) => {
    const [todoList, setTodoList] = useState([]);

    const [todo, setTodo] = useState(initTodo);
    const showTodoList = () => {
        const arr = [];
        for (let i = todoList.length - 1; i >= 0; i--) {
            arr.push(todoList[i]);
        }
        return arr;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        todo.id = randomId();
        todoList.push(todo);
        setTodoList([...todoList]);
        setTodo({
            ...initTodo
        });
    }
    const handleChange = (e) => {
        todo[e.target.name] = e.target.value;
        setTodo({
            ...todo
        });
    }
    const handleClearTodoList = () => {
        setTodoList([]);
    }
    const handleCompletedAllTodo = () => {
        setTodoList(todoList.map((item) => {
            return {
                ...item,
                status: true
            }
        }));
    }

    const deleteTodoItem = (id) => {
        const idx = todoList.findIndex((item) => {
            return item.id === id
        })
        if (idx < 0) {
            alert('Không có!')
        } else {
            todoList.splice(idx, 1);
            setTodoList([...todoList]);
        }
    }

    const updateStatusTodoItem = (id) => {
        const idx = todoList.findIndex((item) => {
            return item.id === id
        })
        if (idx < 0) {
            alert('Không có!')
        } else {
            todoList[idx].status = !todoList[idx].status;
            setTodoList([...todoList]);
        }
    }
    return (
        <div className="todolist">
            <h1 className="ti">Todo List</h1>
            <div className="container-table-todolist">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="todoTitle" value={todo.todoTitle} onChange={handleChange} />
                    <input type="text" name="des" value={todo.des} onChange={handleChange} />
                    <button>Create Todo</button>
                </form>
                <div className="line-fnc-btn">
                    <button className="clear" onClick={handleClearTodoList}>
                        Clear Todos
                    </button>
                    <button className="mark-completed" onClick={handleCompletedAllTodo}>
                        Mark As Completed
                    </button>
                </div>
                <div className="table-show-todolist">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th className="stt">Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todoList.length !== 0 ?
                                    showTodoList().map((item) => {
                                        return <ShowItem
                                            key={item.id}
                                            todoTitle={item.todoTitle}
                                            des={item.des}
                                            status={item.status}
                                            handleDelete={() => {
                                                deleteTodoItem(item.id)
                                            }}
                                            updateStatusTodoItem={() => {
                                                updateStatusTodoItem(item.id)
                                            }}
                                        />
                                    })
                                    : <>Không có việc làm</>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default TodoList;

// rafce