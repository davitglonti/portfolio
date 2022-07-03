import Home from './components/Home';
import './App.css';

import About from './components/About';
import Menu from './components/Menu';

import Pizzainfo from './components/Pizzainfo';

import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    
      <Route path="/" element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/page' element={<Pizzainfo/>}/>
     <Route path='/menu' element={<Menu/>}/>
    </Routes>
    </Router>
    
    </div>
  );
}

export default App;
