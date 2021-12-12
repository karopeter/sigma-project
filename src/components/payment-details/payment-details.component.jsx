import React from 'react';
import bank3 from '../../assets/img/bank3.png';
import './payment-details.styles.scss';

const PaymentDetails = () => {
   return (
     <figure className="extreme">
      <figcaption className="extreme__user">
        <img src={bank3} alt="" className="extreme__photo" />
        <div className="extreme__user-box">
          <p className="extreme__user-detail">To Peter Deo</p>
          <p className="extreme__user-copy">Lorem ipsum trans multi dan short ehn come.</p>
        </div>
        <div className="extreme__flip">
           21 December 2021 | 23:51
           <br className="hidden-xs" />
           <span className="extreme__span">$ 972.00</span>
        </div>
      </figcaption>
    </figure>
   );
};

export default PaymentDetails;