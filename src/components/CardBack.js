import React from 'react';

const CardBack = (props) =>{

    const handleClick = (event) =>{
        props.handleClick(event.currentTarget.id)
    }
      return(
          <div>
        <div className='card-side side-back'>
          <div className='container-fluid'>
          <div className='row'>
         
          <img src={props.img} />
          <div className="text-into">
            </div>
            {/* <CardProfileLinks /> */}
          </div>
        </div>
       </div>
       <button  id ={props.id} onClick={handleClick}>Click to flip</button>
      </div>
      )
    }
  
  
  export default CardBack;