import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from './header';
import About from './about';
import Portfolio from './portfolio';
import Skills from './skills';
import Footer from './footer';

class App extends React.Component {
    render() {
        return (
            <Fade>
                <div>
                    <Header/>
                    <About/>
                    <Portfolio/>
                    <Skills/>
                    <Footer/>
                </div>
            </Fade>
        );
    }
}

export default App;
