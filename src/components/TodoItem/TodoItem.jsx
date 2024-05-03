import {Button, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import styles from './style.module.scss'
import {deleteItem} from "../../util/deleteItem";

const TodoItem = ({id, title, body }) => {

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
        <form>
          <input className='mx-2' name='checkbox' type="checkbox"/>
          <label htmlFor="checkbox">Completed ?</label>
        </form>
        <hr/>
        <Button onClick={() => deleteItem(id)} variant='danger'>Delete Item</Button>
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
