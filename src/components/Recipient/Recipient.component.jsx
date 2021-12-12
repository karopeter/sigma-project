import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Recipient.styles.scss';
import bank6 from '../../assets/img/bank6.png';
import bank3 from '../../assets/img/bank3.png';
import bank4 from '../../assets/img/bank4.png';
import Details from '../Details/Details.component';

const Recipient = () => {
   return (
     <section className="container">
        <h1 className="heading--inset">Verified Customers</h1>
    <Container>
      <Row>
        <Col xs={{ order: 'last'}}>
           <div className="credit__card--1">
             <span><img src={bank6} alt="" className="img--1" /><a href="#" className="lock__element">John Doe<br className="hidden-xs" /><p className="long__copy">2080787654</p></a></span>
           </div>
        </Col>
        <Col xs>
          <div className="credit__card--2">
            <span><img src={bank3} alt="" className="img--2" /><a href="#" className="lock__file">Peter Doe<br className="hidden-xs"/><p className="long__copy--1">3245678990</p></a></span> 
          </div>
        </Col>
        <Col xs={{ order: 'first'}}>
         <div className="credit__card--3">
           <span><img src={bank4} alt="" className="img--3" /><a href="#" className="lock__element">Jane Shawn<br className="hidden-xs"/><p className="long__copy">5678909876</p></a></span>
         </div>
        </Col>
      </Row>
      <Details />
     </Container>
     </section> 
   );
};

export default Recipient;