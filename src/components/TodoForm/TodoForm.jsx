import {Button, Form} from "react-bootstrap";
import {useState} from "react";

const defaultFormState = {
    title: '',
    body: '',
};

const TodoForm = ({saveDataHandler}) => {
    const [formState, setFormState] = useState({...defaultFormState});

    const handleSubmit = (e) => {
        e.preventDefault();
        saveDataHandler(formState);
        setFormState({...defaultFormState});
    }

    const inputHandler = ({target}) => {
        const newState = {...formState};
        newState[target.name] = target.value;
        setFormState(newState);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="TodosForm.title">
                <Form.Label>Input Title</Form.Label>
                <Form.Control
                    name='title'
                    value={formState.title}
                    type="text"
                    placeholder="Title..."
                    onChange={inputHandler}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="TodosForm.body">
                <Form.Label>Input body</Form.Label>
                <Form.Control
                    name='body'
                    value={formState.body}
                    as="textarea"
                    rows={3}
                    placeholder='Body...'
                    onChange={inputHandler}
                />
            </Form.Group>
            <Button type='submit' variant="info">Save Item</Button>
        </Form>
    );
};

export default TodoForm;