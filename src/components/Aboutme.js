import React from 'react';
import Header from './Header';
import profile from '../images/profile.png';
import Card from '../components/Card';
import Card2 from '../components/Card2';
import ContactCard from '../components/ContactCard';
import SocialMedia from '../components/SocialMedia';



class Aboutme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            one: 'hidden',
            two: 'hidden',
            oneOne: 'hidden',
            twoOne: 'hidden',
            oneTwo: 'hidden',
            twoTwo: 'hidden',
            oneThree: 'hidden',
            twoThree: 'hidden',
            topOne1: 'hidden',
            topOne2: 'hidden',
            topOne3: 'hidden',
            topOne4: 'hidden',
            topTwo1: 'hidden',
            topTwo2: 'hidden',
            topTwo3: 'hidden',
            topTwo4: 'hidden'
        }
    }
    componentDidMount() {
        window.onscroll = () => this.handleAnimation();
    };


    handleAnimation = () => {
        if (document.documentElement.scrollTop > 0) {
            this.setState({
                one: 'cardOne',
                topOne1: 'topOne1'
            });
        }

        if (document.documentElement.scrollTop > 80) {
            this.setState({
                two: 'cardTwo',
                topTwo1: 'topTwo1'
            });
        }

        if (document.documentElement.scrollTop > 130) {
            this.setState({
                oneOne: 'cardOne',
                topOne2: 'topOne2'
            });
        }

        if (document.documentElement.scrollTop > 190) {
            this.setState({
                twoOne: 'cardTwo',
                topTwo2: 'topTwo2'
            });
        }
        if (document.documentElement.scrollTop > 250) {
            this.setState({
                oneTwo: 'cardOne',
                topOne3: 'topOne3'
            });
        }
        if (document.documentElement.scrollTop > 300) {
            this.setState({
                twoTwo: 'cardTwo',
                topTwo3: 'topTwo3'
            });
        }
        if (document.documentElement.scrollTop > 350) {
            this.setState({
                oneThree: 'cardOne',
                topOne4: 'topOne4'
            });
        }
        if (document.documentElement.scrollTop > 400) {
            this.setState({
                twoThree: 'cardTwo',
                topTwo4: 'topTwo4'
            });
        }
    }


    render() {
        return (
            <div className="aboutme-container">
                <Header />
                <SocialMedia />
                <div className="aboutme-container__body">
                    <div className="img-container">
                        <img className="img-profile" alt="profile" src={profile} />
                    </div>
                    <div className="aboutme-container__body-text">
                        <div className="box">

                            <div className="title">
                                <span className="block"></span>
                                <h1>Maria Blanco<span></span></h1>
                            </div>

                            <div className="role">
                                <div className="block"></div>
                                <p>Front-End Developer </p>
                            </div>
                           
                        </div>
                        <div className="container-cards">
                            <Card classCard={this.state.one} classTop={this.state.topOne1} text='5 things you should know about me!👋🏻' />
                            <Card2 classCard={this.state.two} classTop={this.state.topTwo1} text=' Girl from Malaga happily living in Madrid.💃🏻' />
                            <Card classCard={this.state.oneOne} classTop={this.state.topOne2} text="I've worked for Apple for 8 years 🍏" />
                            <Card2 classCard={this.state.twoOne} classTop={this.state.topTwo2} text='I play electric bass! Stevie Wonder is a reference for me'/>
                            <Card classCard={this.state.oneTwo} classTop={this.state.topOne3} text="I've had my own company 🏢" />
                            <Card2 classCard={this.state.twoTwo} classTop={this.state.topTwo3} text="I've managed teams and  I love working with people"
 />
                            <Card classCard={this.state.oneThree} classTop={this.state.topOne4} text='Do you want to meet me'
                            />
                            <ContactCard classCard={this.state.twoThree} classTop={this.state.topTwo4} website='mailto:mablancoalvarez@gmail.com'
                            />

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default Aboutme;
