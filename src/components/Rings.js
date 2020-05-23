import React from 'react';
import techicons from '../images/techicons.png';
import designicons from '../images/desingicons.png';
import personalicons from '../images/personalicons.png'


const Rings = () => {

    return (
        <div className="wrapper-circles">
            <div className="circle1">
                <h2 className="circle1_text">  Technical Skills</h2>
                <img className="circle1_img" src={techicons} alt="technical skills icons"></img>
              
            </div>
            <div className="circle2">
            <h2 className="circle2_text">Design Skills</h2>
                <img className="circle2_img" src={designicons} alt="Design skills icons"></img>
             
            </div>
            <div className="circle3">
            <h2 className="circle3_text">Personal Skills</h2>
                <img className="circle3_img" src={personalicons}alt="personal skills"></img>
            </div>

      </div>)
}




export default Rings;