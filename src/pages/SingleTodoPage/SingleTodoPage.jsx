import BaseTemplate from "../../templates/BaseTemplate";
import {useParams} from "react-router-dom";
import TodoItem from "../../components/TodoItem";
import {getItemById} from "../../utils/saveTodos";
import {useEffect, useState} from "react";

const defaultState = {
    id: '',
    title: '',
    body: '',
}

const SingleTodoPage = () => {
    const [todoItemData, setTodoItemData] = useState({...defaultState});

    const {id: todoItemId} = useParams();

    useEffect(() => {
        const data = getItemById(todoItemId);
        setTodoItemData(data);
    }, []);


    return (
        <BaseTemplate title={todoItemId + ' Todo Item'}>
            <TodoItem {...todoItemData}/>
        </BaseTemplate>
    )
}

export default SingleTodoPage;