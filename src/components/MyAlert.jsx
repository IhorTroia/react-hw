import Alert from 'react-bootstrap/Alert';

function MyAlert({text, type}) {
    return (
        <Alert variant={type}>
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
                {text}
            </p>
        </Alert>
    );
}

export default MyAlert;