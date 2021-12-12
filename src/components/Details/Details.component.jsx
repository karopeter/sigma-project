import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Details.styles.scss';

const Details = () => {
   return (
     <section className="container">
       <h1 className="heading--inset">Transaction Detail</h1>
       <InputGroup className="mb-3">
         <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>120.50</InputGroup.Text>
        <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
      </InputGroup>
      <Form.Control type="text" placeholder="Normal text" />
      <div className="d-grid gap-2">
        <Button className="slide" size="lg">Process Payment</Button>
      </div>
     </section>
   );
};

export default Details;