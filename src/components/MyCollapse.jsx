import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import {Container} from "react-bootstrap";

function MyCollapse({ text }) {
    const [open, setOpen] = useState(true);

    return (
        <Container>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Click
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    {text}
                </div>
            </Collapse>
        </Container>
    );
}

export default MyCollapse;