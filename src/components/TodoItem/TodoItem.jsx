import {Button, Card, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/slices/todo";
import styles from './style.module.scss';

const TodoItem = ({
                    id,
                    title,
                    body,
      }) => {

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const clickHandler = () => {
    navigation('todos/' + id)
  }

    const deleteTodoItem = () => {
        dispatch(deleteTodo(id));
    };

  return (
    <Card
      className={styles.todo__item}
    >
      <Card.Body>
        <Card.Title onClick={clickHandler}>#{id} - {title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <hr/>
        <Button
            onClick={deleteTodoItem}
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
