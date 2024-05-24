import BaseTemplate from "../../templates/BaseTemplate";
import {Button, Col, Container, Row} from "react-bootstrap";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import {useEffect, useState} from "react";
import {getData, saveTodoItem} from '../../utils/saveTodos'
import {deleteAllTodoItems, deleteSingleTodo} from "../../utils/deleteTodos";

const HomePage = () => {
    const [todoItems, setTodoItems] = useState([]);

    const addTodoItem = (todoItem) => {
        const newState = structuredClone(todoItems);
        const savedData = saveTodoItem(todoItem);
        newState.push(savedData);
        setTodoItems(newState);
    }

    const removeAllTodoItems = () => {
        deleteAllTodoItems();
        setTodoItems([]);
    }

    const removeSingleTodoItem = (id) => {
        const updatedData = deleteSingleTodo(id);
        setTodoItems(updatedData);
    }

    useEffect(() => {
        setTodoItems(getData());
    }, []);

    return (
        <BaseTemplate title='Home Page'>
            <Container>
                <Row>
                    <Col md={4}>
                        <TodoForm saveDataHandler={addTodoItem} deleteAllTodos={removeAllTodoItems}/>
                    </Col>
                    <Col md={8}>
                        {todoItems.length ?
                            <TodoList todos={todoItems} deleteSingleItem={removeSingleTodoItem}/> :
                            <h3 className='py-5 text-center'>Create New Item</h3>
                        }

                    </Col>
                </Row>
            </Container>
        </BaseTemplate>
        )
}

export default HomePage;