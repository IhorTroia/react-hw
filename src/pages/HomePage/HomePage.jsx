import React, { useEffect, useState } from 'react';
import BaseTemplate from "../../templates/BaseTemplate";
import {Col, Container, Row} from "react-bootstrap";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import {getData, saveTodoItem} from "../../util/saveTodos";
import {clearData} from "../../util/deleteAllTodos";

const HomePage = () => {
    const [todoItems, setTodoItems] = useState([]);

    const addTodoItem = (todoItem) => {
        const newState = structuredClone(todoItems);
        const savedData = saveTodoItem(todoItem);
        newState.push(savedData);
        setTodoItems(newState);
    }

    const deleteTodoItems = () => {
        setTodoItems([]);
        clearData();
    }

    useEffect(() => {
        setTodoItems(getData());
    }, [])

    return (
        <BaseTemplate title='Home Page' id='home-page'>
            <Container>
                <Row>
                    <Col md={4}>
                        <TodoForm clearDataHandler={deleteTodoItems} saveDataHandler={addTodoItem} />
                    </Col>
                    <Col md={8}>
                        {todoItems.length ?
                            <TodoList todos={todoItems} /> :
                            <h3 className='py-4 border text-center'>No Items Added</h3>
                        }
                    </Col>
                </Row>
            </Container>
        </BaseTemplate>
    );
};

export default HomePage;
