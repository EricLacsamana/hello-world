import React, { Component } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import MainModal from '../main/MainModal';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false
        }
    };

    openModal = () => {
        this.setState({ openModal: true });
    }

    closeModal = () => {
        this.setState({ openModal: false });
    }

    render() {
        const { openModal } = this.state;
        return (
            <Container fluid>
                <Button onClick={this.openModal}>Open</Button>
                <MainModal
                    closeModal={this.closeModal}
                    openModal={openModal}
                />
            </Container>
        );
    }
}

export default Main;