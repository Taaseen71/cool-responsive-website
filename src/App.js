import GlobalStyles from './components/GlobalStyles';
import AboutUs from './pages/AboutUs';

function App() {
    return (
        <div className="App">
            <h1>Saad's Photography</h1>
            <GlobalStyles />
            <AboutUs />
        </div>
    );
}

export default App;

// npm i react-router-dom framer-motion react-intersection-observer styled-components