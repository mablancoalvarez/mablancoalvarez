import React from 'react';

const CardBack = (props) =>{

    const handleClick = () =>{
        props.handleClick()
    }
      return(
        <div className='card-side side-back'>
          <div className='container-fluid'>
          <button onClick={handleClick}>Click to flip</button>
            <h1>Let's get in touch!</h1>
        
            {/* <CardProfileLinks /> */}
          </div>
        </div>
      )
    }
  
  
  export default CardBack;