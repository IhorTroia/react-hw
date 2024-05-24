import BaseTemplate from "../../templates/BaseTemplate";
import {getData} from "../../utils/saveTodos";
import {Col, Container, Row} from "react-bootstrap";
import TodoItem from "../../components/TodoItem";

const AllTodosPage = () => {
    const data = getData();

    return (
        <BaseTemplate title='All Todos'>
            <Container>
                <Row>
                    {
                        data
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