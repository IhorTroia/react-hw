import {Card} from "react-bootstrap";

const TodoItem = ({title, body}) => {
    return (
        <Card className='mx-1 mb-5' style={{width: '15rem', background: 'grey'}}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default TodoItem;