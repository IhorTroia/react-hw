import ListGroup from 'react-bootstrap/ListGroup';
import {Children} from "react";
import {ListGroupItem} from "react-bootstrap";

function MyListGroup({ children }) {
    return (
        <ListGroup as="ul">
            {
                Children.map(children, child => {
                    return (
                        <ListGroupItem as="li">
                            {child}
                        </ListGroupItem>
                    )
                })
            }
        </ListGroup>
    );
}

export default MyListGroup;