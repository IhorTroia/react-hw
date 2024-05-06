import BaseTemplate from "../../templates/BaseTemplate/BaseTemplate";
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";
import {Container} from "react-bootstrap";


const SingleTodoItemPage = () => {
    const todos = useSelector((state) => state.todos.value);
    const { id: todoItemId } = useParams();

    const todoItemData = todos.find((item) => item.id === +todoItemId);

    return (
        <BaseTemplate title="Todos Page" id="home-page">
            <Container className='my-5 text-center' style={{border: '2px solid black'}}>
                <h4>{'#' + todoItemData.id} - {todoItemData.title}</h4>
                <hr/>
                <p>{todoItemData.body}</p>
            </Container>
        </BaseTemplate>
    );
};

export default SingleTodoItemPage;
