import {Input, Button} from "@mui/material";
import {useState} from "react";

const AddTodoForm = () => {

    const [task, setTask] = useState('');

    return (
        <>
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

            <Button
                type={'submit'}
                variant={'outlined'}
                color={'primary'}
                style={{ width: "10%" }}
            >Add</Button>
        </>
    );
};

export default AddTodoForm;