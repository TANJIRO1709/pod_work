import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sponsor from './components/Sponsor';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Body from './components/Body';
import Body2 from './components/Body2';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Sponsor />
      <Component1 />
      <Component2 />
      <Component3 />
      <Body />
      <Component4 />
      <Body2 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
