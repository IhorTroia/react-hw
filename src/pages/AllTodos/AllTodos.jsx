import BaseTemplate from "../../templates/BaseTemplate";
import {Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";


const AllTodos = () => {
    const todos = useSelector((state) => state.todos.value);

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
                            </Row>
                        );
                    })
                 : <h1>Create Todo</h1>}
            </Container>
        </BaseTemplate>
    );
};

export default AllTodos;
