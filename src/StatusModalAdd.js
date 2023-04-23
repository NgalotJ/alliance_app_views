import React, {useState} from 'react';
import Modal from 'react-modal';
import {Button, Form, FormGroup, Stack} from 'react-bootstrap';
import StatusIcon from './Images/Status/project-status 1.svg';
import './Status.css';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AddItemModal = ({ isOpen, onClose, onSave }) => {
    const [itemName, setItemName] = useState('');

    const handleSave = () => {
        onSave({
            name: itemName,
        });
        setItemName(itemName);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel='Add Status'
            ariaHideApp={false}
        >
            <Stack className='centered-modal-content' gap={3}>
                <Button variant='secondary' onClick={onClose} className='ms-auto'>
                    <FontAwesomeIcon className='fa-lg' icon={icon({name: 'xmark'})} />
                </Button>
                <img src={StatusIcon} alt='Add Status Icon' className='modal-img-resize'/>
                <Form onSubmit={handleSave} className='col-4'>
                    <FormGroup className='mb-3'>
                        <Form.Label htmlFor='name' className='ms-auto'>
                            <h2>Add Status</h2>
                        </Form.Label>
                        <Form.Control 
                            type='text' 
                            id='name'
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                        >    
                        </Form.Control>
                    </FormGroup>
                    <Button variant='danger' type='submit' className='d-grid gap-2 col-6 mx-auto'>
                        Create
                    </Button>
                </Form>
            </Stack>
        </Modal>
    );
};

export default AddItemModal;