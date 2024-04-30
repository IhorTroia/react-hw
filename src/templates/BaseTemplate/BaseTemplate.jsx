import React from 'react';
import {Container} from "react-bootstrap";

const BaseTemplate = ({ title,children }) => {
    return (
        <main>
            {title && <h1 className='mt-lg-5 text-center'>{title}</h1>}
            {children}
        </main>
    );
};

export default BaseTemplate;