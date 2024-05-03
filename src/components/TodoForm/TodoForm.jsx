import {Form, Button} from "react-bootstrap";
import { useFormik } from 'formik';
import validationSchema from "./validationSchema";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

const defaultFormState = {
    title: '',
    body: '',
}
const TodoForm = ({saveDataHandler, clearDataHandler}) => {
    const navigation = useNavigate();

    const clickHandler = () => {
        navigation('todos');
    }

    const formik = useFormik({
        validationSchema,
        initialValues: {...defaultFormState},
        onSubmit: values => {
            saveDataHandler(values);
            formik.resetForm();
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="TodosForm.title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    name='title'
                    type="text"
                    placeholder="Todo title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                {(formik.errors.title && formik.touched.title) &&
                    <div className='mt-2 text-danger font-monospace'>{formik.errors.title}</div>
                }
            </Form.Group>
            <Form.Group className="mb-3" controlId="TodosForm.description">
                <Form.Label>Task body</Form.Label>
                <Form.Control
                    name='body'
                    as="textarea"
                    rows={6}
                    placeholder='Task body'
                    onChange={formik.handleChange}
                    value={formik.values.body}
                />
                {(formik.errors.body && formik.touched.body) &&
                    <div className='mt-2 text-danger font-monospace'>{formik.errors.body}</div>
                }
            </Form.Group>
            <div className='mb-3'>
                <Button className='mx-3' type='submit' variant="outline-primary">Save Todo</Button>
                <Button onClick={() => {formik.resetForm()}} type='button' variant="outline-warning">Reset Form</Button>
                <Button onClick={clearDataHandler} className='mx-3' type='button' variant="outline-danger">Delete All Items</Button>
            </div>
            <Button onClick={clickHandler} variant='outline-dark'>Check All Todos</Button>
        </Form>
    );
};

TodoForm.propTypes = {
    saveDataHandler: PropTypes.func.isRequired
}

export default TodoForm;
