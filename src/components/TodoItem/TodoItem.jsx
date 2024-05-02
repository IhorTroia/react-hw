import React from 'react';
import {Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from './style.module.scss';

const TodoItem = ({id, title, body}) => {
    console.log(styles)
    const navigation = useNavigate();
    const handleOnClick = (e) => {
        e.preventDefault();
        navigation(`todos/${id}`)
    }

    return <Card
        className={styles.todo}
    >
        <Card.Body>
            <Card.Title onClick={handleOnClick}>#{id} - {title}</Card.Title>
            <Card.Body>{body}</Card.Body>
        </Card.Body>
    </Card>
};

TodoItem.defaultProps = {
    body: 'Not provided',
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
}

export default TodoItem;