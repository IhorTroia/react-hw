import BaseTemplate from "../../templates/BaseTemplate";
import {Container, Row} from "react-bootstrap";
import {getData} from "../../util/saveTodos";
import TodoItem from "../../components/TodoItem";
import React from "react";


const AllTodos = () => {
    const todos = getData();

    return (
        <BaseTemplate id='todos-page' title='All Todos'>
            <Container>
                {todos.length ?
                    todos.map((todo) => {
                        return (
                            <Row className='my-5 text-center' style={{border: '2px solid black'}}  key={todo.id}>
                                <h4>{'#' + todo.id} - {todo.title}</h4>
                                <hr/>
                                <p>{todo.body}</p>
                                <hr/>
                                <p>{todo.isCompleted ? "Task is Completed" : "Task not Completed"}</p>
                            </Row>
                        );
                    })
                 : <h1>Create Todo</h1>}
            </Container>
        </BaseTemplate>
    );
};

export default AllTodos;
