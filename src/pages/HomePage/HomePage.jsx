import BaseTemplate from "../../templates/BaseTemplate";
import {Col, Container, Row} from "react-bootstrap";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import {useSelector} from "react-redux";

const HomePage = () => {
    const todoItems = useSelector(state => state.todoItems.data)

    return (
        <BaseTemplate title='Home Page'>
            <Container>
                <Row>
                    <Col md={4}>
                        <TodoForm />
                    </Col>
                    <Col md={8}>
                        {todoItems.length ?
                            <TodoList todoItems={todoItems}/> :
                            <h3 className='py-5 text-center'>Create New Item</h3>
                        }

                    </Col>
                </Row>
            </Container>
        </BaseTemplate>
        )
}

export default HomePage;