import React from 'react';
import {Card} from "react-bootstrap";

const TodoItem = ({title, body}) => {
    return <Card
    className='mx-1 mb-5'
    style={{ width: '15rem', background: 'lightgray'}}
    >
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Body>{body}</Card.Body>
        </Card.Body>
    </Card>
};

export default TodoItem;