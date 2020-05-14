import React from 'react';
import Header2 from './Header2';
import ReactCardFlip from 'react-card-flip';
import CardFront from './CardFront';
import CardBack from './CardBack';
import awesome from '../images/awesome.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import project4 from '../images/project4.png';


// const Projects = () => {

//     return(
//         <div>
//             <Header2 />
//             <h1>Projects</h1>

//         </div>
//     )
// }
class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
         isFlipped1: false,
         isFlipped2: false,
         isFlipped3: false,
         isFlipped4: false

        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        let key;
     if ( id === "1"){
        key = "isFlipped1";

     }
     
      else if ( id === "2"){
        key = "isFlipped2";
      }
      else if ( id === "3"){
        key = "isFlipped3";
      }
      else  
        key = "isFlipped4";
      
        this.setState(prevState => ({ [key]: !prevState[key] }));
    }

    render() {
        return (
            <div className="projects-container">
                <Header2 />
                <div className='card-container'>
                    <div className='card-body'>
                        <ReactCardFlip isFlipped={this.state.isFlipped1} flipDirection="horizontal">
                            <CardFront 
                                id= "1"
                                textleft="1#"
                                textright="Awesome 
                                            Cards"
                                textcontent="Digital Card Generator is a project made with React Js , starting from Vanila Javascript legacy code and using twitter's Rest API. We can customize the look of the card, filling in the data through a form and including dark mode."
                                handleClick={this.handleClick} />
                            <CardBack
                                id ="1"
                                code="http://beta.adalab.es/project-promo-i-module-3-team-1-new/#/"
                                website="http://beta.adalab.es/project-promo-i-module-3-team-1-new/#/"
                                handleClick={this.handleClick}
                                img = {awesome}
                            />

                        </ReactCardFlip>
                        <ReactCardFlip isFlipped={this.state.isFlipped2} flipDirection="horizontal">
                            <CardFront
                                id= "2"
                                textleft="2#"
                                textright="Rick & Morty"
                                textcontent="Responsive web developed with React js, CSS3 & Sass. I access the data info trought an API Rest. Rick & Morty is a project where you can find a specific character or filter by type , furthermore you can more details of each character in a new website route."
                                handleClick={this.handleClick} />
                            <CardBack
                                id="2"
                                handleClick={this.handleClick}
                                img = {project2}
                                code ='https://github.com/mablancoalvarez/modulo-3-evaluacion-final-mablancoalvarez'
                                website='http://beta.adalab.es/modulo-3-evaluacion-final-mablancoalvarez/#/'
                            />

                        </ReactCardFlip>
                        <ReactCardFlip isFlipped={this.state.isFlipped3} flipDirection="horizontal">
                            <CardFront
                                id= "3"
                                textleft="3#"
                                textright="Tv Show"
                                textcontent="TV Browser developed with Vainilla Javascript, HTML5,CSS3 & SASS technology and API REST. You can search a Tv Show and you could save in a favorite list list, in addition you can refresh the website without lost your searches. "
                                handleClick={this.handleClick} />
                            <CardBack
                                id="3"
                                handleClick={this.handleClick}
                                img = {project3}
                                code ='https://github.com/mablancoalvarez/modulo-2-evaluacion-final-mablancoalvarez'
                                website='http://beta.adalab.es/modulo-2-evaluacion-final-mablancoalvarez/?input=game'
                            />

                        </ReactCardFlip>
                        <ReactCardFlip isFlipped={this.state.isFlipped4} flipDirection="horizontal">
                            <CardFront
                                id= "4"
                                textleft="4#"
                                textright="Collapsing Margins"
                                textcontent="The goal was to create a responsive website with information about our team and ourselves individually, according to the client needs, and it features a main page and a second page with a functional contact form.  Website was done using HTLM5 ,CSS3 & SASS and Gulp."
                                handleClick={this.handleClick} />
                            <CardBack
                                id="4"
                                handleClick={this.handleClick}
                                img = {project4}
                                code ='https://github.com/mablancoalvarez/project-promo-i-module-1-team-3-afternoon-final'
                                website='http://beta.adalab.es/project-promo-i-module-1-team-3-afternoon-final/'
                            />

                        </ReactCardFlip>
                    </div>
                </div>
            </div>

        )
    }
}

export default Projects;