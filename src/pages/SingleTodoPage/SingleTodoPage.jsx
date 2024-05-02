import BaseTemplate from "../../templates/BaseTemplate/BaseTemplate";
import { useParams } from "react-router-dom";
import TodoItem from "../../components/TodoItem";
import { getItemById } from "../../utils/saveTodos";
import {useEffect, useState} from "react";
import {Container} from "react-bootstrap";

const defaultState = {
    id: '-',
    title: '-',
    body: '-',
}

const SingleTodoPage = () => {
    const {id: todoItemId} = useParams();
    const [todoItemData, setTodoItemData] = useState({...defaultState});

    useEffect(() => {
        const data = getItemById(todoItemId);
        setTodoItemData(data);
    }, []);

    return (
        <BaseTemplate title='Single Todo Page'>
            <Container className='text-center'>
                <TodoItem {...todoItemData}/>
            </Container>
        </BaseTemplate>
    )
}

export default SingleTodoPage;