import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Transactions from '../Transactions/Transactions.component';
import { useStateValue } from '../StateProvider';
import './TransactionsHeader.styles.scss';

  function TransactionsHeader({ id, title, layout,  recieved }) {
   const [{ transaction }, dispatch] = useStateValue();
   const addToTransaction = () => {
     // Add item to transaction
     dispatch({
       type: 'ADD_TO_TRANSACTION',
       item: {
         id: id,
         title: 'all',
         layout: 'TRANSFERRED',
         recieved:  'RECIEVED'
       }
     })
   }
   return (
    <Container>
      <Row>
        <Col xs=""><a className="item__layout">{title}</a></Col>
        <Col xs={{ order: 12 }}><a className="item__layout">{layout}</a></Col>
        <Col xs={{ order: 1 }}><a  className="item__layout">{recieved}</a></Col>
      </Row>
      <Transactions />
    </Container>
   );
};

export default TransactionsHeader;