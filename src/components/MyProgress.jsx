import ProgressBar from 'react-bootstrap/ProgressBar';

function MyProgress({ percentage }) {
    return <ProgressBar now ={percentage} label={`${percentage}%`} />;
}

export default MyProgress;