import React from 'react';

const CardBack = (props) =>{

    const handleClick = (event) =>{
        props.handleClick(event.currentTarget.id)
    }
      return(
          <div>
        <div className='card-side side-back'>
          <div className='container-fluid'>
          
            <h1>{props.title}!</h1>
            <button  id ={props.id} onClick={handleClick}>Click to flip</button>
        
            {/* <CardProfileLinks /> */}
          </div>
        </div>
       
      </div>
      )
    }
  
  
  export default CardBack;