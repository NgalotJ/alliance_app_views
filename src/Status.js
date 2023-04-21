import React, { useState } from 'react';
import { Stack, Container, Col, Row, Button } from 'react-bootstrap';
import AddBttnStatus from './Images/Status/plus.svg';
import './Status.css';

const Status = () => {

    const [statuses, additionalStatus] = useState([
        '1 Pre-Screening', 
        '2 HR Interview',
        '3 Technical Interview',
        '4 Final Interview',
        '5 Job Offer',
        '6 Accepted Job Offer',
    ]);

    const handleAddStatus = () => {
        additionalStatus([...statuses, 'value']);
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
                        <Button className='ms-auto btn-inline-form' onClick={handleAddStatus}>
                            <img src={AddBttnStatus} alt='Add Button Status'></img>
                        </Button>
                    </Stack>
                    <Stack gap={2}>
                        {statuses.map(item => (
                            <h6 key={item}>
                                {item}
                            </h6>
                        ))}
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default Status;