import React from 'react';

const AnimatedText = () => {

return (
    <div className="content">
  <div className="content__container">
    <p className="content__container__text">
     I´m
    </p>
    
    <ul className="content__container__list">
      <li className="content__container__list__item">Maria!  <span role="img" aria-label="woman tech"> 👩🏻‍💻 </span>
      </li>
      <li className="content__container__list__item"> a Front-End Dev!</li>
      <li className="content__container__list__item">pasionate!  <span role="img" aria-label="yellow heart">💛</span></li>
      <li className="content__container__list__item"> a Designer!  <span role="img" aria-label="light bulb">💡</span></li>
    </ul>
  </div>
</div>
)}

export default AnimatedText;