import React from 'react';

const CardBack = (props) => {

    const handleClick = (event) => {
        props.handleClick(event.currentTarget.id)
    }
    return (

        <div className='card-back'>
            <div className='img-container'>
                <img className="image" src={props.img} alt='Project link' />
            </div>

            <div className="icons">
          
                <div className=" btn-border-drawing"><i className="fas fa-angle-left" id={props.id} onClick={handleClick}></i></div>
                <a href={props.code} target="_blank" rel="noreferrer noopener"> Visit code <i className="fas fa-code"></i> </a>
                <a href={props.website} target="_blank" rel="noreferrer noopener"> Visit website  <i className="fas fa-external-link-alt"></i></a>
            </div>
            </div>
      
    )
}


export default CardBack;