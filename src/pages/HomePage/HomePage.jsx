import BaseTemplate from "../../templates/BaseTemplate";
import {Col, Container, Row} from "react-bootstrap";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import {useEffect, useState} from "react";
import {getData, saveTodoItem} from '../../utils/saveTodos'

const HomePage = () => {
    const [todoItems, setTodoItems] = useState([]);

    const addTodoItem = (todoItem) => {
        const newState = structuredClone(todoItems);
        const savedData = saveTodoItem(todoItem);
        newState.push(savedData);
        setTodoItems(newState);
    }

    useEffect(() => {
        setTodoItems(getData());
    }, []);

    return (
        <BaseTemplate title='Home Page'>
            <Container>
                <Row>
                    <Col md={4}>
                        <TodoForm saveDataHandler={addTodoItem}/>
                    </Col>
                    <Col md={8}>
                        {todoItems.length ?
                            <TodoList todos={todoItems}/> :
                            <h3 className='py-5 text-center'>Create New Item</h3>
                        }

                    </Col>
                </Row>
            </Container>
        </BaseTemplate>
        )
}

export default HomePage;