import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Transactions from '../Transactions/Transactions.component';
import './TransactionsHeader.styles.scss';

const TransactionsHeader = () => {
   return (
    <Container>
      <Row>
        <Col xs=""><a href="#" className="item__layout">all</a></Col>
        <Col xs={{ order: 12 }}><a href="#" className="item__layout">TRANSFERRED</a></Col>
        <Col xs={{ order: 1 }}><a href="#" className="item__layout">RECIEVED</a></Col>
      </Row>
      <Transactions />
    </Container>
   );
};

export default TransactionsHeader;