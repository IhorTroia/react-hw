import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function BtnGroup() {
    const [isActiveBtn1, setIsActiveBtn1] = useState(true);
    const [isActiveBtn2, setIsActiveBtn2] = useState(true);

    return (
        <ButtonGroup aria-label="Basic example">
            <Button disabled={!isActiveBtn1} onClick={() => { setIsActiveBtn1(true); setIsActiveBtn2(false); }} variant="secondary">Btn1</Button>
            <Button disabled={!isActiveBtn2} onClick={() => { setIsActiveBtn1(false); setIsActiveBtn2(true); }} variant="secondary">Btn2</Button>
        </ButtonGroup>
    );
}

export default BtnGroup;
