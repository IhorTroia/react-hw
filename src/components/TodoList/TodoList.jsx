import TodoItem from "../TodoItem";
import {Col, Row} from "react-bootstrap";
import PropTypes from "prop-types";

const TodoList = ({todos, deleteSingleTodoHandler, updateIsCompleted}) => {
  return (
          <Row>
              {
                  todos.reduceRight((acc, item, index) => (
                      <>
                          {acc}
                          <Col key={Math.random()} md={4}>
                              <TodoItem
                                  {...item}
                                  index={index}
                                  deleteSingleTodoHandler={deleteSingleTodoHandler}
                                  updateIsCompleted={updateIsCompleted}
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
