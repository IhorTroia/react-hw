import BaseTemplate from "../../templates/BaseTemplate";
import {Col, Container, Row} from "react-bootstrap";
import TodoItem from "../../components/TodoItem";
import {useSelector} from "react-redux";

const AllTodosPage = () => {
    const todoItems = useSelector(state => state.todoItems.data);

    return (
        <BaseTemplate title='All Todos'>
            <Container>
                <Row>
                    {
                        todoItems
                            .map((item) => <Col key={Math.random()} md={4}>
                                <TodoItem {...item}/>
                            </Col>)
                    }
                </Row>
            </Container>
        </BaseTemplate>
    );
};

export default AllTodosPage;