import TodoItem from "../TodoItem";
import {Col, Row} from "react-bootstrap";
import PropTypes from "prop-types";

const TodoList = ({todos}) => {
  return (
          <Row>
              {
                  todos.reduceRight((acc, item) => (
                      <>
                          {acc}
                          <Col key={Math.random()} md={4}>
                              <TodoItem
                                  {...item}
                              />
                          </Col>
                      </>
                  ), null)
              }

          </Row>
  )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]))),
}
export default TodoList;
