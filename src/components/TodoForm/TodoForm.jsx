import {Button, Form} from "react-bootstrap";
import {useFormik} from "formik";
import validationSchema from './validationSchema';
import {useDispatch} from "react-redux";
import {addTodoItem, deleteAllTodoItems} from "../../store/slices/todoItems";
import PropTypes from "prop-types";

const defaultFormState = {
    title: '',
    body: '',
};

const TodoForm = () => {

    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {...defaultFormState},
        validationSchema,
        onSubmit: values => {
            dispatch(addTodoItem(values));
            formik.resetForm();
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="TodosForm.title">
                <Form.Label>Input Title</Form.Label>
                <Form.Control
                    name='title'
                    type="text"
                    placeholder="Title..."
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                {(formik.errors.title && formik.touched.title) &&
                    <div className='text-danger'>{formik.errors.title}</div>
                }
            </Form.Group>
            <Form.Group className="mb-3" controlId="TodosForm.body">
                <Form.Label>Input body</Form.Label>
                <Form.Control
                    name='body'
                    as="textarea"
                    rows={3}
                    placeholder='Body...'
                    onChange={formik.handleChange}
                    value={formik.values.body}
                />
                {(formik.errors.body && formik.touched.body) &&
                    <div className='text-danger'>{formik.errors.body}</div>
                }
            </Form.Group>
            <Button type='submit' variant="info">Save Item</Button>
            <Button
                onClick={() => {formik.resetForm()}}
                className='mx-2'
                type='button'
                variant='dark'
            >Reset Form
            </Button>
            <Button
                onClick={() => dispatch(deleteAllTodoItems())}
                type='button'
                variant='danger'
            >Remove All Items
            </Button>
        </Form>
    );
};

export default TodoForm;