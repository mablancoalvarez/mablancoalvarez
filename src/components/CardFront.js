import React from 'react';


const CardFront = (props) => {

    const handleClick = (event) => {
        props.handleClick(event.target.id)

    }
    return (
        
        <div className='card-front'>
            
         
            <div className="container_text">
                <h2 className="number">{props.textleft}</h2>
                <p className="title">{props.textright}</p>
            </div>

            <div className="container_body">
                <p className="text-content">{props.textcontent}</p>
                <p className="labels">
                    <span className="label1">{props.label1}</span>
                    <span className="label2">{props.label2}</span>
                    <span className="label3">{props.label3}</span>
                    <span className="label4">{props.label4}</span>
                    <span className="label5">{props.label5}</span>

                </p>
                <button className="btn draw-border" id={props.id} onClick={handleClick}> Take a Look</button>
            </div>
        </div>
      
    )
}


export default CardFront;