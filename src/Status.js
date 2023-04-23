import React, { useState } from 'react';
import { Stack, Container, Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Status.css';
import AddItemModal from './StatusModalAdd';

const Status = () => {

    const [statuses, setStatuses] = useState([
        {name: 'Pre-Screening'}, 
        {name: 'HR Interview'},
        {name: 'Technical Interview'},
        {name: 'Final Interview'},
        {name: 'Job Offer'},
        {name: 'Accepted Job Offer'},
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddStatus = (item) => {
        setStatuses([...statuses, item]);
        setIsModalOpen(false);
    };

    return (
        <Container fluid>
            <Row>
                <Col>
                    Nav
                </Col>
                <Col xs={9}>
                    <Stack direction='horizontal'>
                        <h3>Status</h3>
                        <Button className='ms-auto btn-inline-form' onClick={() => setIsModalOpen(true)}>
                            <FontAwesomeIcon icon={icon({name: 'plus'})} />
                        </Button>
                    </Stack>
                    <AddItemModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSave={handleAddStatus}
                    />
                    <br/>
                    <Stack gap={2}>
                        {statuses.map((item, index) => (
                            <div key={item}>
                                <h6>
                                    <Button className='round-circle btn-danger'>
                                        {index + 1}
                                    </Button>
                                {'\t ' + item.name}
                                </h6>
                                {
                                    statuses.length === index + 1 ?
                                    <br/>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                    </svg>
                                }
                            </div>
                        ))}
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default Status;