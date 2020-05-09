import React from 'react';


const CardFront = (props) => {

    const handleClick = (event) => {
        props.handleClick(event.target.id)
        console.log(event.target)
    }
    return (

        <div className='card-side side-front' >
            <div className='container-fluid'>
                <div className='row'>
                    <div className="front-text">
                        <div className="left">
                            <div className="solid" style={props.style}><h1 className="text-left">{props.textleft}</h1>
                            </div>
                        </div>
                        <div className="right">
                            <p className="text-right">{props.textright}</p>
                        </div>
                    </div>

                    {/* <div className='col-xs-6 side-front-content'>
                        <h2>Czech based</h2>

                        <h1>UI/UX Designer</h1> */}

                        <p>Andrey is driven by turning ideas into scalable and and empowering experiences that solve real life problems.</p>
                        <button id ={props.id} onClick={handleClick}>Click to flip</button>
                    {/* </div> */}
                </div>
            </div>



        </div>


    )
}


export default CardFront;