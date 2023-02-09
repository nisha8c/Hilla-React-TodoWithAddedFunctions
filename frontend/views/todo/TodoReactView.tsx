import { useState, useEffect } from 'react';
import Todo from 'Frontend/generated/com/example/application/Todo';
import { TodoEndpoint } from 'Frontend/generated/endpoints';

import {TextField} from "@hilla/react-components/TextField.js";
import {Button} from "@hilla/react-components/Button.js";
import {Checkbox} from "@hilla/react-components/Checkbox.js";
import {Dialog} from "@hilla/react-components/Dialog.js";
import './TodoStyles.css'

export default function() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState('');
    const [checked, setChecked] = useState([]);

    useEffect(() => {
        const getAllTodos = async () => {
            await TodoEndpoint.findAll()
                .then(setTodos);
        }
        getAllTodos();
    }, []);

    async function addTodo() {
        if (task !== '' && task.length > 2) {
            const saved = await TodoEndpoint.add(task);
            if(saved){
                setTodos([...todos, saved]);
                setTask('');
            }
        } else {
            alert('Enter a task with length more than 2')
        }
    }

    async function updateTodo(todo: Todo, done: boolean) {
        const saved = await TodoEndpoint.update({
            ...todo, done
        });
        if(saved){
            setTodos(todos.map(existing => existing.id === saved.id ? saved : existing));
        }
    }

    async function removeTodo(todo: Todo) {
        const deletedTodoId = await TodoEndpoint.delete(todo);
        if (deletedTodoId) {
            setTodos(todos.filter((todo) => todo.id != deletedTodoId))
        }
    }

    return(
        <>
            <div className="p-m">
                <h1>Hilla cool todo!</h1>

                <div className="flex gap-s">
                    <TextField className='add-task-textfield'
                               value={task}
                               onChange={e => setTask(e.target.value)}
                               clear-button-visible
                               placeholder={'Add a Task...'}
                               required
                               errorMessage='Task is required.'
                               autofocus
                    />
                    <Button theme="primary" onClick={addTodo}>Add</Button>
                </div>

                <div className='todo-container'>
                    {todos.map(todo => (
                        <div
                            className={`todo-card ${
                            todo.done ? 'todo--completed' : ''
                            }`}
                            key={todo.id}
                        >
                            <Checkbox
                                className='todo-checkbox'
                                checked={todo.done}
                                onCheckedChanged={e => {
                                    updateTodo(todo, e.detail.value)
                                }}
                            />

                            <span className='todo-body'>
                                {todo.task}
                            </span>

                            <Button className='btn-delete-todo'
                                    onClick={() => removeTodo(todo)}
                            >X</Button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}