import {Button, Card, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import styles from './style.module.scss';

const TodoItem = ({
                    id,
                    index,
                    title,
                    body,
                    deleteSingleTodoHandler,
                    isCompleted,
                    updateIsCompleted
      }) => {

  const navigation = useNavigate();
  const clickHandler = () => {
    navigation('todos/' + id)
  }

  return (
    <Card
      className={styles.todo__item}
    >
      <Card.Body>
        <Card.Title onClick={clickHandler}>#{id} - {title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <hr/>
        <Form.Check
            inline
            label="Completed"
            name="group1"
            type={"checkbox"}
            id={`inline-${"checkbox"}-1`}
            checked={isCompleted}
            onChange={() => updateIsCompleted(index)}
        />
        <hr/>
        <Button
            onClick={() => deleteSingleTodoHandler(id)}
            variant='danger'
        >
          Delete Item
        </Button>
      </Card.Body>
    </Card>
  );
}

TodoItem.defaultProps = {
  body: 'Not provided',
}

TodoItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string
}

export default TodoItem
