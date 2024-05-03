import BaseTemplate from "../../templates/BaseTemplate";
import {Container, Row} from "react-bootstrap";
import {getData} from "../../util/saveTodos";
import TodoItem from "../../components/TodoItem";


const AllTodos = () => {
    const todos = getData();

    return (
        <BaseTemplate id='todos-page' title='All Todos'>
            <Container>
                {todos.length ?
                    todos.map((todo) => {
                        return (
                            <Row key={todo.id}>
                                <TodoItem id={todo.id} title={todo.title} body={todo.body}/>
                            </Row>
                        );
                    })
                 : <h1>Create Todo</h1>}
            </Container>
        </BaseTemplate>
    );
};

export default AllTodos;
