import React, { Component } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import MainModal from '../main/MainModal';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            users: []
        }
    };

    _handleChange = (key, value) => {
        this.setState({ [key]: value });
    }

    _handleOpenModal = () => {
        this.setState({ openModal: true });
    }

    _handleCloseModal = () => {
        this.setState({ openModal: false });
    }

    _handleSubmit = (newUser) => {

        const { users } = this.state
        console.log('newUser', newUser);
        // what ever the purpose is

        // create previous copy of state  users
        const updatedUsers = [
            ...users,
        ]

        updatedUsers.push(newUser) // push new user to users data

        this.setState({
            users: updatedUsers, // replace new userData to state
            openModal: false    // closing the modal
        })
    }

    render() {
        const { openModal, users } = this.state;

        return (
            <Container>
                <Button onClick={this._handleOpenModal}>State Example 1</Button>
                <MainModal
                    handleChane={this._handleChange} // extends this function to child component
                    handleCloseModal={this._handleCloseModal} // extends this function to child component
                    handleSubmit={this._handleSubmit} // extends this function to child component
                    openModal={openModal}
                />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) =>
                            <tr key={`${user.index}`}>
                                <td>{index + 1}</td>
                                <td>{user.username}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container >
        );
    }
}

export default Main;