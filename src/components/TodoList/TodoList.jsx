import TodoItem from "../TodoItem";
import {Button, Col, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

const TodoList = ({todos, deleteSingleItem}) => {
    const navigation = useNavigate();

    const clickHandler = () => {
        navigation('todos');
    }
    return (
        <Row>
            <Col className='text-center my-3' md={12}>
                <Button onClick={clickHandler} type='button' variant='secondary'>Check All Todo Items</Button>
            </Col>
            {
                todos
                    .map((item) => <Col key={Math.random()} md={4}>
                        <TodoItem {...item} removeSingleItem={deleteSingleItem}/>
                </Col>)
            }
        </Row>
    )
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default TodoList;