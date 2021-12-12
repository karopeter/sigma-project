import React from 'react';
import bank6 from '../../assets/img/bank6.png';
import PaymentDetails from '../payment-details/payment-details.component';
import './Payments.styles.scss';

const Payments = () => {
  return (
  <div>
   <figure className="extreme">
      <figcaption className="extreme__user">
        <img src={bank6} alt="" className="extreme__photo" />
        <div className="extreme__user-box">
          <p className="extreme__user-detail">From John Doe</p>
          <p className="extreme__user-copy">Lorem ipsum trans multi dan short ehn come.</p>
        </div>
        <div className="extreme__flip">
           15 December 2021 | 23:51
           <br className="hidden-xs" />
           <span className="extreme__span">$ 972.00</span>
        </div>
      </figcaption>
    </figure>
     <PaymentDetails />
    </div>
  );
};

export default Payments;