import React from 'react';
import Header from './Header';
import AnimatedText from './AnimatedText';
import SocialMedia from './SocialMedia';


const Home = () => {

    return(
        <div className="container-image">
          <Header />
        <AnimatedText/>
        <SocialMedia/>
        </div>
    )

}

export default Home;