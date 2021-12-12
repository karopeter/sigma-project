import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bank1 from '../../assets/img/bank1.png';
import bank2 from '../../assets/img/bank2.png';
import './Dashboard.styles.scss';
import Recipient from '../Recipient/Recipient.component';

const Dashboard = ({id, ...otherItemProps}) => {
   return (
     <Container>
       <Row>
         <Col xs={6}>
            <img src={bank1} alt="bank1" className="images" />
         </Col>
         <Col xs={6}>
            <img src={bank2} alt="bank2" className="images" />
         </Col>
       </Row> 
       <Recipient eventKey={id} { ...otherItemProps } />
     </Container>
   );
};

export default Dashboard;