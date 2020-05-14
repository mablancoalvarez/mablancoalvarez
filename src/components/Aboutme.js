import React from 'react';
import Header2 from './Header2';
import profile from '../images/profile.png';


const Aboutme = () => {

    return (
        <div className="aboutme-container">
            <Header2 />
            <div className="img-container">
            <img className="img-profile" src={profile} />
            </div>
            
        </div>
    )
}

export default Aboutme;