import {Button, Form} from "react-bootstrap";
import {useFormik} from "formik";
import validationSchema from "./validationSchema";
import PropTypes from "prop-types";

const defaultFormState = {
    title: '',
    body: '',
}

const TodoForm = ({saveDataHandler}) => {

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
                    placeholder="Create Title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                {(formik.errors.title && formik.touched.title) &&
                    <div className='mt-2 text-danger font-monospace'>{formik.errors.title}</div>
                }
            </Form.Group>
            <Form.Group className="mb-3" controlId="TodosForm.body">
                <Form.Label>Body</Form.Label>
                <Form.Control
                    name='body'
                    as="textarea"
                    rows={6}
                    placeholder={'Create Body'}
                    onChange={formik.handleChange}
                    value={formik.values.body}
                />
                {(formik.errors.body && formik.touched.body) &&
                    <div className='mt-2 text-danger font-monospace'>{formik.errors.body}</div>
                }
            </Form.Group>
            <Button type="submit" variant="outline-primary">Create Task</Button>
        </Form>
    );
};

TodoForm.propTypes = {
    saveDataHandler: PropTypes.func.isRequired,
}

export default TodoForm;