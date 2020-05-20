import React from 'react';
import ReactCardFlip from 'react-card-flip';
import CardBack from './CardBack';
import CardFront from './CardFront';


class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        }
    }
    handleClick = () => {
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
    }

    render() { 
        const {data}= this.props;
        const {isFlipped} = this.state;
        return (
            <ReactCardFlip isFlipped={isFlipped}>

                <CardFront textright={data.name} textleft={data.number} textcontent={data.description} label1={data.labels.label1}
                label2={data.labels.label2} label3={data.labels.label3} label4={data.labels.label4}label5={data.labels.label5}
                    handleClick={this.handleClick}>


                </CardFront >

                <CardBack
                    handleClick={this.handleClick}>

                </CardBack>
            </ReactCardFlip>

        )
    }
}


export default ProjectCard;