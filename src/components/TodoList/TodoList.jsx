import TodoItem from "../TodoItem";
import {Col, Row} from "react-bootstrap";
import PropTypes from "prop-types";

const TodoList = ({todos}) => {
    return (
        <Row>
            {
                todos
                    .map((item) => <Col key={Math.random()} md={4}>
                        <TodoItem {...item}/>
                </Col>)
            }
        </Row>
    )
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default TodoList;