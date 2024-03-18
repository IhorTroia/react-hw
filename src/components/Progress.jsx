import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress(props) {
    const { now } = props;
    return <ProgressBar now={now} label={`${now}%`} />;
}

export default Progress;