import BaseTemplate from "../../templates/BaseTemplate";
import {Col, Container, Row} from "react-bootstrap";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/slices/todo";

const HomePage = () => {
    const todoItems = useSelector((state) => state.todos.value);
    const dispatch = useDispatch();

    const addTodoItem = (todoItem) => {
        dispatch(addTodo(todoItem));
    };

    return (
        <BaseTemplate title='Home Page' id='home-page'>
            <Container>
                <Row>
                    <Col md={4}>
                        <TodoForm saveDataHandler={addTodoItem} />
                    </Col>
                    <Col md={8}>
                        {todoItems.length ?
                            <TodoList
                                todos={todoItems}
                            /> :
                            <h3 className='py-4 border text-center'>No Items Added</h3>
                        }
                    </Col>
                </Row>
            </Container>
        </BaseTemplate>
    );
};

export default HomePage;

