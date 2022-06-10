import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import AllProjects from './components/AllProjects/AllProjects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Detail from './components/Detail';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-2 lg:px-0'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allproject' element={<AllProjects />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
