import React from 'react';
import Header2 from './Header2';
import profile from '../images/logo.png';


const Aboutme = () => {

    return (
        <div className="aboutme-container">
            <Header2 />
            <div className="img-profile"> {profile} </div>
            
        </div>
    )
}

export default Aboutme;