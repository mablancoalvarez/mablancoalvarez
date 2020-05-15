import React from 'react';


const CardFront = (props) => {

    const handleClick = (event) => {
        props.handleClick(event.target.id)
        
    }
    return (

        <div className='card-front'>
            {/* <div className='container-fluid'>
                <div className='col-xs-6 side-front-content'> */}
                    <div className="container_text">
                            <h2 className="number">{props.textleft}</h2>
                            <p className="title">{props.textright}</p>
                    </div>

                     <div className="container_body">
                        <p className="text-content">{props.textcontent}</p>
                        <button  className="btn draw-border" id ={props.id} onClick={handleClick}> Take a Look</button>
                    </div>
                </div>
        //     </div>



        // </div>


    )
}


export default CardFront;