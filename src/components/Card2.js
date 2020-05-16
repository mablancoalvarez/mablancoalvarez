import React from 'react';


const Card2 = ({ classCard, classTop, text }) => (
    <div className={`${classCard} ${classTop}`}>
        <div><p>{text}</p></div>
      
    </div>
);


   export default Card2;