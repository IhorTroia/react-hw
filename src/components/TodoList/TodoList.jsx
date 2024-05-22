import TodoItem from "../TodoItem";
import {Col, Row} from "react-bootstrap";

const TodoList = ({todos}) => {
    return (
        <Row>
            {
                todos.map((item) => <Col key={Math.random()} md={4}>
                    <TodoItem title={item.title} body={item.body}/>
                </Col>)
            }
        </Row>
    )
};

export default TodoList;