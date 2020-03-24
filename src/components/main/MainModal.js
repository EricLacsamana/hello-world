import React, { Component } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';

class MainModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false
        }
    };

    render() {
        const { closeModal, openModal } = this.props;
        console.log('this.props', this.props);
        return (
            <Modal show={openModal}>
                <Container>
                    <h1>Modal Content Here</h1>
                    <Button onClick={closeModal}>Close Modal</Button>
                </Container>
            </Modal>
        );
    }
}

export default MainModal;