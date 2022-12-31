import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About'; 
import Service from './components/services/Service';
import Contact from './components/contact/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
