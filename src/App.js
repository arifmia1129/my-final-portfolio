import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProjects from './components/AllProjects/AllProjects';
import Contact from './components/Contact';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allproject' element={<AllProjects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
