import React from 'react';
import bank8 from '../../assets/img/bank8.png';
import './Process-Payment.styles.scss';

const ProcessPayment = () => {
   return (
     <figure className="extreme">
      <figcaption className="extreme__user">
        <img src={bank8} alt="" className="extreme__photo" />
        <div className="extreme__user-box">
          <p className="extreme__user-detail">To William David</p>
          <p className="extreme__user-copy">Lorem ipsum trans multi dan short ehn come.</p>
        </div>
        <div className="extreme__flip">
           20 December 2021 | 23:51
           <br className="hidden-xs" />
           <span className="extreme__span-1">- $ 247.50</span>
        </div>
      </figcaption>
    </figure>
   );
};

export default ProcessPayment;