import React from 'react';


const CardFront = (props) => {

    const handleClick = () =>{
        props.handleClick()
    }


      return(
        <div className='card-side side-front'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xs-6'>
              <button onClick={handleClick}>Click to flip</button>
                <img src='https://source.unsplash.com/w8YICpz1I10/358x458' />
              </div>
              <div className='col-xs-6 side-front-content'>
                <h2>Czech based</h2>
  
                <h1>UI/UX Designer</h1>
  
                <p>Andrey is driven by turning ideas into scalable and and empowering experiences that solve real life problems.</p>
  
            
              </div>
            </div>
          </div>
        </div>
      )
    }
  




export default CardFront;