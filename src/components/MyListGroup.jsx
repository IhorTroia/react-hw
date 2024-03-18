import { Children } from 'react';
import { ListGroup } from "react-bootstrap";

function MyListGroup(props) {
    const {children} = props;

    return (
        <ListGroup as="ul">
            {Children.map(children, (child) => {
                return (
                    <ListGroup.Item as='li'>
                        {child}
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    )
}

export default MyListGroup