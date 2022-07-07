import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Instructors from './pages/Instructors';
import NotFound from './pages/NotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import InstructorsDetail from './pages/InstructorsDetail';
import {Navigate} from 'react-router-dom'



function App() {
  return (
    
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/instructors/:id' element={<InstructorsDetail />} />
        <Route path='/instructors' element={<Instructors />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/deneme' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
