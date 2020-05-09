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
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
     
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  
    render() {
      return (
         <div>
          <Header2/>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <CardFront
            handleClick={this.handleClick}/>
            
  
          <CardBack
          handleClick={this.handleClick}
             />
        </ReactCardFlip>
        </div>
      )
    }
  }

export default Projects;