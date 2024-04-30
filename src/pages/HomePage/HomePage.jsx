import BaseTemplate from "../../templates/BaseTemplate/BaseTemplate";
import {Container, Row, Col} from "react-bootstrap";
import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";
import {useState} from "react";

const HomePage = () => {
    const [todoItems, setTodoItems] = useState([])

    const addTodoItem = (todoItem) => {
        const newState = structuredClone(todoItems);
        newState.push(todoItem);
        setTodoItems(newState);
    }

    return <BaseTemplate title='Home Page'>
        <Container>
            <Row>
                <Col md={4}>
                    <TodoForm saveDataHandler={addTodoItem} />
                </Col>
                <Col md={8}>
                    {todoItems.length ?
                        <TodoList todos={todoItems}/> :
                        <h3 className='py-4 border text-center'>No Items Added</h3>
                    }

                </Col>
            </Row>
        </Container>
    </BaseTemplate>
}

export default HomePage;