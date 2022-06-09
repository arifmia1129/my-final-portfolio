import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProjects from './components/AllProjects/AllProjects';
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
