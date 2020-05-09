import React from 'react';
import Header2 from './Header2';
import ReactCardFlip from 'react-card-flip';
import CardFront from './CardFront';
import CardBack from './CardBack';


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
         isFlipped3: false

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
      else  
        key = "isFlipped3";
      
        this.setState(prevState => ({ [key]: !prevState[key] }));
    }

    render() {
        return (
            <div>
                <Header2 />
                <div className='card-container'>
                    <div className='card-body'>
                        <ReactCardFlip isFlipped={this.state.isFlipped1} flipDirection="horizontal">
                            <CardFront 
                                id= "1"
                                textleft="Project"
                                textright="1#"
                                handleClick={this.handleClick} />
                            <CardBack
                                id ="1"
                                title="Collapsing Margin"
                                handleClick={this.handleClick}
                            />

                        </ReactCardFlip>
                        <ReactCardFlip isFlipped={this.state.isFlipped2} flipDirection="horizontal">
                            <CardFront
                                id= "2"
                                textleft="Project"
                                textright="2#"
                                handleClick={this.handleClick} />
                            <CardBack
                                id="2"
                                title="Rick & Morty"
                                handleClick={this.handleClick}
                            />

                        </ReactCardFlip>
                        <ReactCardFlip isFlipped={this.state.isFlipped3} flipDirection="horizontal">
                            <CardFront
                                id= "3"
                                textleft="Project"
                                textright="3#"
                                handleClick={this.handleClick} />
                            <CardBack
                                id="3"
                                title="ShowTv"
                                handleClick={this.handleClick}
                            />

                        </ReactCardFlip>
                    </div>
                </div>
            </div>

        )
    }
}

export default Projects;