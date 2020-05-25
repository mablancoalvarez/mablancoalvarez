import React from 'react';
import CV from '../files/CV.pdf';
const SocialMedia = (props) => {

    return (
        <div className="social-icons">
            <a href='https://www.linkedin.com/in/mariablancoalvarez/' target="_blank" rel="noreferrer noopener"><i className="fab fa-linkedin"></i></a>
            <a href='https://twitter.com/Marybass' target="_blank" rel="noreferrer noopener"><i className="fab fa-twitter-square"></i></a>
            <a href='https://github.com/mablancoalvarez' target="_blank" rel="noreferrer noopener">
                <i className="fab fa-github"></i></a>
            <a href='mailto:mablancoalvarez@gmail.com' target="_blank" rel="noreferrer noopener">
                <i className="fas fa-at"></i></a>
            <a href={CV} target="_blank" rel="noopener noreferrer" download>
                <i className="fas fa-file-download"></i>
            </a>
        </div>
    );
}


export default SocialMedia;