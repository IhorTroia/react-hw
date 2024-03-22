import React from "react"
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import {FormGroup} from "react-bootstrap"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Table from "react-bootstrap/Table"
import classNames from "classnames"


class MyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            address: "",
            city: "",
            country: "",
            acceptRules: false,
            formDisplay: true
        };
    }

    emailHandler = ({ target }) => {
        this.setState({ email: target.value })
    }

    passwordHandler = ({ target }) => {
        this.setState({ password: target.value })
    }

    addressHandler = ({ target }) => {
        this.setState({ address: target.value })
    }

    cityHandler = ({ target }) => {
        this.setState({ city: target.value })
    }

    countryHandler = ({ target }) => {
        this.setState({ country: target.value })
    }

    rulesHandler = ({ target }) => {
        this.setState({ acceptRules: target.checked })
    }

    render() {
        const form = classNames({
            "d-none": !this.state.formDisplay
        })

        const table = classNames({
            "d-none": this.state.formDisplay
        })
        return (
            <Container>
                <div className={form}>
                    <h1 className="text-center">My Form</h1>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault()
                            this.setState({formDisplay: !this.state.formDisplay})
                        }
                        }>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                onChange={this.emailHandler}
                                value={this.state.email}
                                placeholder="Email"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                onChange={this.passwordHandler}
                                value={this.state.password}
                                placeholder="Password"/>
                        </Form.Group>
                        <FormGroup className="mb-3" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                onChange={this.addressHandler}
                                value={this.state.address}
                                placeholder={'Address'}
                            />
                        </FormGroup>
                        <Form.Group className="mb-3" controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={this.cityHandler}
                                value={this.state.city}
                                placeholder="City"/>
                        </Form.Group>

                        <FloatingLabel className="mb-3" controlId="country" label="Country">
                            <Form.Select
                                onChange={this.countryHandler}
                                value={this.state.country}
                                aria-label="Floating label select example">
                                <option value="">Select a country</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Italy">Italy</option>
                                <option value="China">China</option>
                            </Form.Select>
                        </FloatingLabel>


                        <Form.Group className="mb-3" controlId="rules">
                            <Form.Check
                                type="checkbox"
                                onChange={this.rulesHandler}
                                checked={this.state.acceptRules}
                                label="Accept Rules"
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </div>

                <div className={table}>
                    <Button
                        className="mb-3 mt-3"
                        variant="primary"
                        type="submit"
                        onClick={() => this.setState({formDisplay: !this.state.formDisplay})}
                    >
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
                            <td>{this.state.email}</td>
                            <td>{this.state.password}</td>
                            <td>{this.state.address}</td>
                            <td>{this.state.city}</td>
                            <td>{this.state.country}</td>
                            <td>{Boolean(this.state.acceptRules).toString()}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>

            </Container>

        )
    }
}

export default MyForm