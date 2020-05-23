import React from 'react';
import Header2 from './Header';
import works from '../works.js';
import ProjectCard from './ProjectCard';



class Projects extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     isFlipped1: false,
        //     isFlipped2: false,
        //     isFlipped3: false,
        //     isFlipped4: false

        // };
      
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(id) {
    //     let key;
    //     if (id === "1") {
    //         key = "isFlipped1";

    //     }

    //     else if (id === "2") {
    //         key = "isFlipped2";
    //     }
    //     else if (id === "3") {
    //         key = "isFlipped3";
    //     }
    //     else
    //         key = "isFlipped4";

    //     this.setState(prevState => ({ [key]: !prevState[key] }));
    // }

    render() {
        return (

            <div className="projects-container">
                <Header2 />
                <div className='card-container'>
                    <div className='card-body'>
                    {works.map(work=> {
                                return <ProjectCard
                                key={work.id}
                                data={work}/>
                                })}
                    </div>
                </div>
            </div>

        )
    }
}

export default Projects;