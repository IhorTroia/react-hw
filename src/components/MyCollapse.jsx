import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function MyCollapse(props) {
    const [open, setOpen] = useState(false);
    const { text } = props;

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Collapse
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    {text}
                </div>
            </Collapse>
        </>
    );
}

export default MyCollapse;