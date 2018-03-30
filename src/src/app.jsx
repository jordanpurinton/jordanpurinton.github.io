import React from 'react';
import Header from './header';
import About from './about';
import Portfolio from './portfolio';
import Skills from './skills';
import Footer from './footer';
import Fade from 'react-reveal/Fade';

class App extends React.Component {
    render() {
        return (
            <Fade>
                <section>
                    <Header />
                    <About />
                    <Portfolio />
                    <Skills />
                    <Footer />
                </section>
            </Fade>
        );
    }
}

export default App;
