import React from 'react';


const Card = ({ classCard, classTop, text, website }) => (
    <div className={`${classCard} ${classTop}`}>
        <div><p>{text}</p> </div>
    </div>
   );

   export default Card;