import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const defaultFormState = {
    title: '',
    body: '',
}

const TodoForm = ({saveDataHandler}) => {
    const [formState, setFormState] = useState({...defaultFormState});

    const handleSubmit = (e) => {
        e.preventDefault();
        saveDataHandler(formState);
        setFormState({...defaultFormState});
    }

    const inputHandler = ({target}) => {
        const newFormState = {...formState};
        newFormState[target.name] = target.value;
        setFormState(newFormState);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="TodosForm.title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    name='title'
                    value={formState.title}
                    type="text"
                    placeholder="Create Title"
                    onChange={inputHandler}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="TodosForm.body">
                <Form.Label>Body</Form.Label>
                <Form.Control
                    name='body'
                    value={formState.body}
                    as="textarea"
                    rows={6}
                    placeholder={'Create Body'}
                    onChange={inputHandler}
                />
            </Form.Group>
            <Button type="submit" variant="outline-primary">Create Task</Button>
        </Form>
    );
};

export default TodoForm;