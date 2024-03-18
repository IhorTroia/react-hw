import Alert from 'react-bootstrap/Alert';

function AlertComp(props) {
    const {variantAlert, text} = props;
    return (
        <Alert variant={variantAlert}>
            {text}
        </Alert>
    );
}

export default AlertComp;