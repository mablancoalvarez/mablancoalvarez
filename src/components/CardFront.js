import React from 'react';


const CardFront = (props) => {

    const handleClick = (event) => {
        props.handleClick(event.target.id)
        
    }
    return (

        // <div className='card-side side-front' >
            <div className='container-fluid'>
                <div className='col-xs-6 side-front-content'>
                    <div className="front-text">
                        <div className="left">
                            <div className="solid"><h2 className="text-center">{props.textleft}</h2>
                            </div>
                        </div>
                        <div className="right">
                            <p className="text-center">{props.textright}</p>
                        </div>
                    </div>

                     <div className='col-xs-6 side-front-content'>
                        <p className="text-content">{props.textcontent}</p>
                        <button  className="btn draw-border" id ={props.id} onClick={handleClick}> Take a Look</button>
                        
                    </div>
                </div>
            </div>



        // </div>


    )
}


export default CardFront;