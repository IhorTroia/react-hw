import BaseTemplate from "../../templates/BaseTemplate";
import {useParams} from "react-router-dom";
import TodoItem from "../../components/TodoItem";
import {useSelector} from "react-redux";
import {Container} from "react-bootstrap";


const SingleTodoPage = () => {
    const todoItems = useSelector(state => state.todoItems.data);

    const {id: todoItemId} = useParams();

    const todoItemData = todoItems.find((item) => item.id === +todoItemId);


    return (
        <BaseTemplate title={todoItemId + ' Todo Item'}>
            <Container>
                <TodoItem {...todoItemData}/>
            </Container>
        </BaseTemplate>
    )
}

export default SingleTodoPage;