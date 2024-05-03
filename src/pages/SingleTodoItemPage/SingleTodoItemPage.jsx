import React, {useEffect, useState} from 'react';
import BaseTemplate from "../../templates/BaseTemplate/BaseTemplate";
import { useParams } from "react-router-dom";
import TodoItem from "../../components/TodoItem";
import {getItemById} from "../../util/saveTodos";
import {Container} from "react-bootstrap";

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
                <TodoItem {...todoItemData} />
            </Container>
        </BaseTemplate>
    );
};

export default SingleTodoItemPage;
