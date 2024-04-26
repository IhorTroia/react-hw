import { useNavigate } from "react-router-dom";

function Back() {
    const navigation = useNavigate();

    const redirectUser = () => {
        navigation('/');
    }

    return <div>
        <button onClick={redirectUser}>
            Back to home
        </button>
    </div>
}

export default Back;