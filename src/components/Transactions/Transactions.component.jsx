import React from 'react';
import Button from 'react-bootstrap/Button';
import button from '../../assets/img/button.svg';
import Payments from '../Payments/Payments.component';
import './Transactions.styles.scss';

const Transactions = () => {
   return (
    <div className="container">
     <form action="#" className="search">
       <input type="text" className="search__input" placeholder="Search Transactions" />
       <Button className="search__button">
          <img src={button} alt="" className="search__icon" />
       </Button>
     </form>
    </div>
   );
};

export default Transactions;