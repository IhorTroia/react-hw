import React, { useEffect, useState } from 'react';
import BaseTemplate from "../../templates/BaseTemplate";
import {Col, Container, Row} from "react-bootstrap";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import {getData, saveTodoItem} from "../../util/saveTodos";
import {clearData} from "../../util/deleteAllTodos";
import {deleteSingleTodo} from "../../util/deleteItem";
import {updateIsCompletedStatus} from "../../util/updateIsCompleted";

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

    const deleteTodo = (id) => {
        const savedData = deleteSingleTodo(id);
        setTodoItems(savedData);
    };

    const updateIsCompleted = (index) => {
        const todos = structuredClone(todoItems);
        todos[index].isCompleted = !todos[index].isCompleted;
        updateIsCompletedStatus(index);
        setTodoItems(todos);
    };



    useEffect(() => {
        setTodoItems(getData());
    }, [])

    useEffect(() => {
        const sendTodoItemsToServer = async () => {
            if (!todoItems.length) return;
            const url = 'https://663336a5f7d50bbd9b488d51.mockapi.io/api/todo/todo-items';

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(todoItems.at(-1))
                });

                if (!response.ok) {
                    throw new Error('Произошла ошибка при отправке данных.');
                }

                const data = await response.json();
                console.log('Данные успешно отправлены на сервер:', data);
            } catch (error) {
                console.error('Ошибка:', error);
            }
        };
        sendTodoItemsToServer();
    }, [todoItems]);

    return (
        <BaseTemplate title='Home Page' id='home-page'>
            <Container>
                <Row>
                    <Col md={4}>
                        <TodoForm clearDataHandler={deleteTodoItems} saveDataHandler={addTodoItem} />
                    </Col>
                    <Col md={8}>
                        {todoItems.length ?
                            <TodoList
                                todos={todoItems}
                                deleteSingleTodoHandler={deleteTodo}
                                updateIsCompleted={updateIsCompleted}
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

