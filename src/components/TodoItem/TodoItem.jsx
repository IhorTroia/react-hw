import {Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import styles from './style.module.scss'

const TodoItem = ({id, title, body}) => {
    const navigation = useNavigate();

    const clickHandler = () => {
        navigation('/todos/' + id)
    }

    return (
        <Card className={styles.todo__item}>
            <Card.Body>
                <Card.Title onClick={clickHandler}>#{id} - {title}</Card.Title>
                <Card.Text>{body}</Card.Text>
            </Card.Body>
        </Card>
    );
};

TodoItem.defaultProps = {
    body: 'Not Provided',
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
}

export default TodoItem;
