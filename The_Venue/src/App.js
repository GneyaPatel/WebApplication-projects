import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Menu from './pages/menu/menu';
import Blog from './pages/blog/blog';
import Element from './pages/element/element';
import Contact from './pages/contact/contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/menu' element={<Menu />}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/highlight' element={<Element/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
