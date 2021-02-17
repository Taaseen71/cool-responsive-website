import GlobalStyles from './components/GlobalStyles';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Navigation/Nav.jsx';
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Nav />
            <GlobalStyles />
            <Switch>
                <Route exact path="/">
                    <AboutUs />
                </Route>
                <Route exact path="/work">
                    <OurWork />
                </Route>
                <Route exact path="/contact">
                    <ContactUs />
                </Route>
            </Switch>
        </div>
    );
}





export default App;

// npm i react-router-dom framer-motion react-intersection-observer styled-components