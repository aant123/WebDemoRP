import React, { Component } from 'react';
import { Form, FormGroup, Col, Checkbox, Button, FormControl, ControlLabel } from 'react-bootstrap'
import { Route, Router } from 'react-router-dom'
import ListIdpContrainer from '../contrainer/ListIdpContrainer'

class Login extends Component {
    clickSubmit = () => {
        window.location = '/ListIdp'
        console.log('window.location',window.location);
    }
    render() {
        return(
            <div>
            <Form horizontal>
            <FormGroup controlId="formHorizontalTitle">
                <Col componentClass={ControlLabel} sm={5}>
                        Login RP
                </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalCitizenId">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={6}>
                        <FormControl type="text" placeholder="Input Citizen Id" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                     </Col>
                    <Col sm={6}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={6}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={6}>
                        <Button type="button" onClick={this.clickSubmit}>Sign in</Button>
                    </Col>
                </FormGroup>
            </Form>
            </div>
        )
    }
}

export default Login;