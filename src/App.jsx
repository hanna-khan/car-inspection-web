import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import ChooseUs from './components/ChooseUs';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <ChooseUs />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
