import Button from 'react-bootstrap/Button';
import {useState} from "react";

function MyBtnGroup() {
    const [isActiveLeft, setIsActiveLeft] = useState(true);
    const [isActiveRight, setIsActiveRight] = useState(true);

    function handleLeftBtn() {
        setIsActiveRight(!isActiveRight)
    }

    function handleRightBtn() {
        setIsActiveLeft(!isActiveLeft)
    }
    return (
        <>
            <div className="mb-2 text-center">
                <Button onClick={handleLeftBtn} disabled={!isActiveLeft} variant="primary" size="lg">
                    Large button
                </Button>{' '}
                <Button onClick={handleRightBtn} disabled={!isActiveRight} variant="secondary" size="lg">
                    Large button
                </Button>
            </div>
        </>
    );
}

export default MyBtnGroup;