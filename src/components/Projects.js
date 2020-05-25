import React from 'react';
import Header2 from './Header';
import works from '../works.js';
import ProjectCard from './ProjectCard';



class Projects extends React.Component {


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