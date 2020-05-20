import React from 'react';
import Ilustrator from  '../images/logos/ilus.png';
import After from '../images/logos/ae.png';
import Ps from '../images/logos/ps.png'


const Rings = () => {

    return (
        <div className="wrapper-circles">
            <div className="circle1">
                <div className="circle1_icons">
                <i className="fab fa-js-square"></i>
                <i className="fab fa-css3-alt"></i>
                <i className="fab fa-html5"></i>
                <i className="fab fa-gulp"></i>
                <i className="fab fa-react"></i>
                <i className="fab fa-sass"></i>
                <i className="fab fa-git-alt"></i>
                </div>
            </div>
            <div className="circle2">
                <img className="img ilustrator"src={Ilustrator}/>
                <img className="img ae"src={After}/>
                <img className="img ps"src={Ps}/>
                <i class="fab fa-adobe"></i>
            </div>
            <div className="circle3">

            </div>

      </div>
      )
}




export default Rings;