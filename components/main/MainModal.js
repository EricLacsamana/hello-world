import React, { Component } from 'react';
import { Button, InputGroup, Container, FormControl, Modal } from 'react-bootstrap';
import localState from '../main/main.model';

class MainModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            first_name: '',
            last_name: ''
        }
    };

    componentWillReceiveProps(nextProps) {
        const { openModal } = this.props;
        if (nextProps.openModal !== openModal) { // checking the incoming state value to current state value
            this.setState({ ...localState }); // will set what ever value on the local state * comment out this if you want to see the difference
        }
    }

    _handleChange = (key, value) => {
        this.setState({ [key]: value });
    }

    __handleCreateUserData() {
        const newUser = {
            username: this.state.username,
            first_name: this.state.first_name,
            last_name: this.state.last_name
        }

        return newUser;
    }

    render() {
        const { handleSubmit, handleCloseModal, openModal } = this.props;
        console.log('this.state', this.state);
        return (
            <Modal show={openModal}>
                <Container>
                    <h3>Own State Example 1</h3>
                    <InputGroup className="mb-3">
                        <FormControl
                            name="username"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(e) => this._handleChange(e.target.name, e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            name="first_name"
                            placeholder="First Name"
                            aria-label="First Name"
                            aria-describedby="basic-addon1"
                            onChange={(e) => this._handleChange(e.target.name, e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            name="last_name"
                            placeholder="Last Name"
                            aria-label="Last Name"
                            aria-describedby="basic-addon1"
                            onChange={(e) => this._handleChange(e.target.name, e.target.value)}
                        />
                    </InputGroup>
                    {/* Changing the parent state by using the extended function from parent*/}
                    <Button onClick={() => handleSubmit({ ...this.__handleCreateUserData() })}>handleSubmit</Button>
                    <Button onClick={handleCloseModal}>Close Modal</Button>
                </Container>
            </Modal>
        );
    }
}

export default MainModal;