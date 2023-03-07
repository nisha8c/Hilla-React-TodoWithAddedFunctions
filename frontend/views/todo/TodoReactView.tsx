import { useState, useEffect } from 'react';
import Todo from 'Frontend/generated/com/example/application/Todo';
import { TodoEndpoint } from 'Frontend/generated/endpoints';
import toast from 'react-hot-toast';

import {TextField} from "@hilla/react-components/TextField.js";
//import {Button} from "@hilla/react-components/Button.js";

import {Checkbox} from "@hilla/react-components/Checkbox.js";
import './TodoStyles.css'
import {
        Form,
        Stack,
        Row,
        Col,
        Modal
        } from 'react-bootstrap';

import {Input, Button, Paper, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const styles = {
    Paper: {
        padding: 20,
        margin: "auto",
        textAlign: "center",
        width: 500
    }
};

export default function() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState('');
    const [checked, setChecked] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const getAllTodos = async () => {
            await TodoEndpoint.findAll()
                .then(setTodos);
        }
        getAllTodos();
    }, []);

    async function addTodo(e: any) {
        e.preventDefault();
        if (task !== '' && task.length > 2) {
            const saved = await TodoEndpoint.add(task);
            if(saved){
                setTodos([...todos, saved]);
                setTask('');
            }
        } else {
            setShowModal(true);
            handleShow();
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
            toast.success(`${todo.task} is deleted.`, {
                position: "bottom-center",
            });
        }
    }

    return(
        <div className="main-container m-1 p-l">
            <div className="flex-grow p-l">
                <h1>Hilla Todo!</h1>

                <div className="flex gap-s">
                    <Form onSubmit={addTodo} style={{ width: "100%" }}>
                        <Stack gap={4}>
                            <Row>
                                <Col xs={"auto"}>
                                    <Form.Group>
                                        {
                                            /*
                                            <Form.Control
                                            type="text"
                                            value={task}
                                            onChange={e => setTask(e.target.value)}
                                            required
                                            autoFocus={true}
                                            placeholder="Add new task here"
                                        />
                                             */
                                        }

                                        <Input
                                            placeholder={"Add todo here"}
                                            inputProps={{
                                                "aria-label": "Description"
                                            }}
                                            onChange={e => setTask(e.target.value)}
                                            autoFocus={true}
                                            required={true}
                                            value={task}
                                            type={'text'}
                                            style={{ width: "90%" }}
                                        />
                                        <Form.Text className="text-muted">
                                            More than 2 characters.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    {
                                        /*
                                        <Button variant="outline-primary" type="submit">
                                        Submit
                                    </Button>
                                         */
                                    }
                                    <Button
                                        type={'submit'}
                                        variant={'outlined'}
                                        color={'primary'}
                                        style={{ width: "10%" }}
                                        size={'small'}
                                    >Add</Button>

                                </Col>
                            </Row>
                        </Stack>
                    </Form>

                    {
                        showModal &&
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Info</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Enter more than 2 characters.</Modal.Body>
                            <Modal.Footer>
                                {
                                    /*
                                    <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                     */
                                }
                                <Button
                                    variant={'outlined'}
                                    onClick={handleClose}
                                >Close</Button>
                            </Modal.Footer>
                        </Modal>
                    }

                    {
                        /*
                        <TextField className='add-task-textfield'
                               value={task}
                               onChange={e => setTask(e.target.value)}
                               clear-button-visible
                               placeholder={'Add a Task...'}
                               required
                               errorMessage='Task is required.'
                               helperText='Add todo here...'
                    />

                    <Button className='btn-add-todo' theme="primary" onClick={addTodo}>Add</Button>
                         */
                    }

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
                                className='todo-checkbox pr-s ml-s'
                                checked={todo.done}
                                onCheckedChanged={e => updateTodo(todo, e.detail.value)}
                            />

                            <span
                                className='todo-body flex-wrap'
                            >
                                {todo.task}
                            </span>

                            {
                                /*
                                <Button
                                className='btn-delete-todo ml-m mb-s border-0'
                                variant="outline-danger"
                                size="sm"
                                onClick={() => removeTodo(todo)}
                            >X</Button>


                            <Button
                                className='btn-delete-todo ml-m mb-s border-0'
                                variant={'outlined'}
                                size={'small'}
                                onClick={() => removeTodo(todo)}
                                color={'warning'}
                            >X</Button>
                                 */
                            }


                            <IconButton
                                className="ml-auto"
                                color={'warning'}
                                aria-label={'Delete'}
                                onClick={() => removeTodo(todo)}
                            >
                                <DeleteIcon />
                            </IconButton>

                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}