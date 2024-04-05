import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from "react-bootstrap/Table"
import {Container} from "react-bootstrap";
import {useState} from "react";

function MyForm() {
    const [tableShow, setTableShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [acceptRules, setAcceptRules] = useState(false);

    if (tableShow) {
        return (
            <Container>
                <Button variant="primary" onClick={() => {setTableShow(false)}}>
                    Back
                </Button>
                <Table>
                    <thead>
                    <tr>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Accept Rules</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>{address}</td>
                        <td>{city}</td>
                        <td>{country}</td>
                        <td>{Boolean(acceptRules).toString()}</td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        )
    }

    return (
        <Form onSubmit={e => {
            e.preventDefault();
            setTableShow(true);
        }}>
            <Container>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={({ target }) => {setEmail(target.value)}} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={({ target }) => {setPassword(target.value)}} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={address} onChange={({ target }) => {setAddress(target.value)}} type="textarea" placeholder="Enter address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control value={city} onChange={({ target }) => {setCity(target.value)}} type="textarea" placeholder="Enter city" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="select">Country</Form.Label>
                    <Form.Select id="select" value={country} onChange={({ target }) => {setCountry(target.value)}}>
                        <option value="">Select a country</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="Usa">Usa</option>
                        <option value="Sweden">Sweden</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check checked={acceptRules} onChange={({ target }) => {setAcceptRules(target.checked)}} type="checkbox" label="Accept rules" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Container>

        </Form>
    );
}

export default MyForm;