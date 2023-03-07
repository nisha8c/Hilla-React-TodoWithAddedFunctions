import {Input, Button} from "@mui/material";
import {useState} from "react";
import {Col, Form, Row, Stack} from "react-bootstrap";

interface IAddTodoFormProps {
    onSubmitForm(event: React.FormEvent<HTMLFormElement>): void
}

const AddTodoForm = ({ onSubmitForm }: IAddTodoFormProps) => {

    const [task, setTask] = useState('');

    return (
        <Form onSubmit={onSubmitForm} style={{ width: "100%" }}>
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
    );
};

export default AddTodoForm;