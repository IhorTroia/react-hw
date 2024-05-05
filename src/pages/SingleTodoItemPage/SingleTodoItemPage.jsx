import React, {useEffect, useState} from 'react';
import BaseTemplate from "../../templates/BaseTemplate/BaseTemplate";
import { useParams } from "react-router-dom";
import TodoItem from "../../components/TodoItem";
import {getItemById} from "../../util/saveTodos";
import {Container, Row} from "react-bootstrap";

const defaultState = {
    id: '-',
    title: "-",
    body: "-"
}
const SingleTodoItemPage = () => {
    const {id: todoItemId} = useParams();
    const [todoItemData, setTodoItemData] = useState({...defaultState});

    useEffect(() => {
        const data = getItemById(todoItemId);
        setTodoItemData(data);
    }, [])

    return (
        <BaseTemplate title='Todos Page' id='single-item-page'>
            <Container>
                <Row className='my-5 text-center' style={{border: '2px solid black'}}>
                    <h4>{'#' + todoItemData.id} - {todoItemData.title}</h4>
                    <hr/>
                    <p>{todoItemData.body}</p>
                    <hr/>
                    <p>{todoItemData.isCompleted ? "Task is Completed" : "Task not Completed"}</p>
                </Row>
            </Container>
        </BaseTemplate>
    );
};

export default SingleTodoItemPage;
