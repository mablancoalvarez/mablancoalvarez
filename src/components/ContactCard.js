import React from 'react';


const ContactCard = ({classCard,classTop,website }) => (
    <div className={`${classCard} ${classTop}`}>
        <div><a href={website} target="_blank" rel="noreferrer noopener"> Send me a mail <i className="far fa-paper-plane"></i></a> </div>
    </div>
   );

   export default ContactCard;