import { Link } from "react-router-dom";

function Nav () {
    const navStyle = {
        margin: '50px',
        display: 'flex',
        gap: '15px'
    }

    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
        fontSize: '20px'
    }

    return <div>
        <nav style={navStyle}>
            <Link style={linkStyle} to={'/'}>Home</Link>
            <Link style={linkStyle} to={'about'}>About us</Link>
            <Link style={linkStyle} to={'contacts'}>Contacts</Link>
            <Link style={linkStyle} to={'back'}>Back to home</Link>
        </nav>
    </div>
}

export default Nav;